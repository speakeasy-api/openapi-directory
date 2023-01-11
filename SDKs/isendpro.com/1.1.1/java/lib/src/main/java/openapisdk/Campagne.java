package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class Campagne {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Campagne(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getCampagne - Retourne les SMS envoyés sur une période donnée
     *
     * Retourne les SMS envoyés sur une période donnée en fonction d'une date de début et d'une date de fin. 
     * 
     * Les dates sont au format YYYY-MM-DD hh:mm. 
     * 
     * Le fichier rapport de campagne est sous la forme d'un fichier zip + contenant un fichier csv contenant le détail des envois.
     * 
    **/
    public openapisdk.models.operations.GetCampagneResponse getCampagne(openapisdk.models.operations.GetCampagneRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/campagne");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetCampagneResponse res = new openapisdk.models.operations.GetCampagneResponse() {{
            getCampagne200ApplicationJSONBinaryString = null;
            getCampagne200FileBinaryString = null;
            erreur = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                byte[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), byte[].class);
                res.getCampagne200ApplicationJSONBinaryString = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "file")) {
                byte[] out = httpRes.body();
                res.getCampagne200FileBinaryString = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Erreur out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Erreur.class);
                res.erreur = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "file")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
}