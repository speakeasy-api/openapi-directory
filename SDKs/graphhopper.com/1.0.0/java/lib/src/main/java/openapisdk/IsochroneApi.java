package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class IsochroneApi {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public IsochroneApi(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getIsochrone - Isochrone Endpoint
     *
     * ### Example
     * You can get an example response via:
     * 
     * ```
     * curl "https://graphhopper.com/api/1/isochrone?point=51.131108,12.414551&key=[YOUR_KEY]"
     * ```
     * 
     * Don't forget to replace the placeholder with your own key.
     * 
     * ### Introduction
     * ![Isochrone screenshot](./img/isochrone-example.png)
     * 
     * An isochrone of a location is ''a line connecting points at which a vehicle arrives at the same time'', see Wikipedia.
     * With the same API you can also calculate isodistances, just use the parameter distance_limit instead of time_limit`.
     * 
     * ### Use Cases
     * Some possible areas in which this API may be useful to you:
     * 
     * - real estate analysis
     * - realtors
     * - vehicle scheduling
     * - geomarketing
     * - reach of electric vehicles
     * - transport planning
     * - logistics (distribution and retail network planning)
     * 
     * ### API Clients and Examples
     * See the [clients](#section/API-Clients) section in the main documentation, and [live examples](https://graphhopper.com/api/1/examples/#isochrone).
     * 
    **/
    public openapisdk.models.operations.GetIsochroneResponse getIsochrone(openapisdk.models.operations.GetIsochroneRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/isochrone");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetIsochroneResponse res = new openapisdk.models.operations.GetIsochroneResponse() {{
            isochroneResponse = null;
            ghError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.IsochroneResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.IsochroneResponse.class);
                res.isochroneResponse = out;
            }
        }
        else {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GhError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GhError.class);
                res.ghError = out;
            }
        }

        return res;
    }
	
}