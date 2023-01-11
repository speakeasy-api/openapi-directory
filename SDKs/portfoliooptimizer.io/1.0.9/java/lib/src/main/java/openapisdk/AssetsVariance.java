package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class AssetsVariance {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public AssetsVariance(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * postAssetsVariance - Variance
     *
     * Compute the variance of one or several asset(s) from either:  
     * * The asset(s) returns
     * * The assets covariance matrix
     * * The asset(s) volatility
     * 
     * References
     * * [Wikipedia, Variance](https://en.wikipedia.org/wiki/Variance)        
     * 
    **/
    public openapisdk.models.operations.PostAssetsVarianceResponse postAssetsVariance(openapisdk.models.operations.PostAssetsVarianceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/assets/variance");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostAssetsVarianceResponse res = new openapisdk.models.operations.PostAssetsVarianceResponse() {{
            postAssetsVariance200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostAssetsVariance200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostAssetsVariance200ApplicationJson.class);
                res.postAssetsVariance200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postAssetsVarianceSample - Sample variance
     *
     * Compute the sample variance of one or several asset(s) from the asset(s) returns.
     *         
     * > This endpoint is similar to the endpoint [`/assets/variance`](#post-/assets/variance), but uses [Bessel's correction](https://en.wikipedia.org/wiki/Bessel%27s_correction) to compute the variance.
     * 
     * References
     * * [Wikipedia, Variance](https://en.wikipedia.org/wiki/Variance)        
     * 
    **/
    public openapisdk.models.operations.PostAssetsVarianceSampleResponse postAssetsVarianceSample(openapisdk.models.operations.PostAssetsVarianceSampleRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/assets/variance/sample");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostAssetsVarianceSampleResponse res = new openapisdk.models.operations.PostAssetsVarianceSampleResponse() {{
            postAssetsVarianceSample200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostAssetsVarianceSample200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostAssetsVarianceSample200ApplicationJson.class);
                res.postAssetsVarianceSample200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}