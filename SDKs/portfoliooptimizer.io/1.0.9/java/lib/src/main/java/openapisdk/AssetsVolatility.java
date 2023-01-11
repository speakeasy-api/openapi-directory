package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class AssetsVolatility {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public AssetsVolatility(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * postAssetsVolatility - Volatility
     *
     * Compute the volatility (i.e., standard deviation) of one or several asset(s) from either:  
     * * The asset(s) returns
     * * The assets covariance matrix
     * * The asset(s) variance
     * 
     * References
     * * [Wikipedia, Standard Deviation](https://en.wikipedia.org/wiki/Standard_deviation)
     * 
    **/
    public openapisdk.models.operations.PostAssetsVolatilityResponse postAssetsVolatility(openapisdk.models.operations.PostAssetsVolatilityRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/assets/volatility");
        
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

        openapisdk.models.operations.PostAssetsVolatilityResponse res = new openapisdk.models.operations.PostAssetsVolatilityResponse() {{
            postAssetsVolatility200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostAssetsVolatility200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostAssetsVolatility200ApplicationJson.class);
                res.postAssetsVolatility200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postAssetsVolatilitySample - Sample volatility
     *
     * Compute the sample volatility (i.e., sample standard deviation) of one or several asset(s) from the asset(s) returns.
     * 
     * > This endpoint is similar to the endpoint [`/assets/volatility`](#post-/assets/volatility), but uses [Bessel's correction](https://en.wikipedia.org/wiki/Bessel%27s_correction) to compute the volatility.
     * 
     * References
     * * [Wikipedia, Standard Deviation](https://en.wikipedia.org/wiki/Standard_deviation)
     * 
    **/
    public openapisdk.models.operations.PostAssetsVolatilitySampleResponse postAssetsVolatilitySample(openapisdk.models.operations.PostAssetsVolatilitySampleRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/assets/volatility/sample");
        
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

        openapisdk.models.operations.PostAssetsVolatilitySampleResponse res = new openapisdk.models.operations.PostAssetsVolatilitySampleResponse() {{
            postAssetsVolatilitySample200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostAssetsVolatilitySample200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostAssetsVolatilitySample200ApplicationJson.class);
                res.postAssetsVolatilitySample200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}