package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;

public class ServiceNow {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public ServiceNow(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * snowExportAssetsCsv - Export an asset inventory as CSV for ServiceNow integration
    **/
    public openapisdk.models.operations.SnowExportAssetsCsvResponse snowExportAssetsCsv(openapisdk.models.operations.SnowExportAssetsCsvRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/export/org/assets.servicenow.csv");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.SnowExportAssetsCsvResponse res = new openapisdk.models.operations.SnowExportAssetsCsvResponse() {{
            snowExportAssetsCSV200TextCSVBinaryString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/csv")) {
                byte[] out = httpRes.body();
                res.snowExportAssetsCSV200TextCSVBinaryString = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
        }

        return res;
    }
	
	
    /**
     * snowExportAssetsJson - Exports the asset inventory as JSON
    **/
    public openapisdk.models.operations.SnowExportAssetsJsonResponse snowExportAssetsJson(openapisdk.models.operations.SnowExportAssetsJsonRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/export/org/assets.servicenow.json");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.SnowExportAssetsJsonResponse res = new openapisdk.models.operations.SnowExportAssetsJsonResponse() {{
            assetServiceNows = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssetServiceNow[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssetServiceNow[].class);
                res.assetServiceNows = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
        }

        return res;
    }
	
	
    /**
     * snowExportServicesCsv - Export a service inventory as CSV for ServiceNow integration
    **/
    public openapisdk.models.operations.SnowExportServicesCsvResponse snowExportServicesCsv(openapisdk.models.operations.SnowExportServicesCsvRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/export/org/services.servicenow.csv");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.SnowExportServicesCsvResponse res = new openapisdk.models.operations.SnowExportServicesCsvResponse() {{
            snowExportServicesCSV200TextCSVBinaryString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/csv")) {
                byte[] out = httpRes.body();
                res.snowExportServicesCSV200TextCSVBinaryString = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
        }

        return res;
    }
	
}