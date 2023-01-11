package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class AssetsCovarianceMatrix {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public AssetsCovarianceMatrix(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * postAssetsCovarianceMatrix - Covariance Matrix
     *
     * Compute the covariance matrix of assets from either:  
     * * The assets correlation matrix and their volatilities (i.e., standard deviations)
     * * The assets correlation matrix and their variances
     * * The assets returns
     * 
     * References
     * * [Wikipedia, Covariance Matrix](https://en.wikipedia.org/wiki/Covariance_matrix)
     * 
    **/
    public openapisdk.models.operations.PostAssetsCovarianceMatrixResponse postAssetsCovarianceMatrix(openapisdk.models.operations.PostAssetsCovarianceMatrixRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/assets/covariance/matrix");
        
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

        openapisdk.models.operations.PostAssetsCovarianceMatrixResponse res = new openapisdk.models.operations.PostAssetsCovarianceMatrixResponse() {{
            postAssetsCovarianceMatrix200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostAssetsCovarianceMatrix200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostAssetsCovarianceMatrix200ApplicationJson.class);
                res.postAssetsCovarianceMatrix200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postAssetsCovarianceMatrixSample - Sample Covariance Matrix
     *
     * Compute the sample covariance matrix of assets returns.
     * 
     * > This endpoint is similar to the endpoint [`/assets/covariance/matrix`](#post-/assets/covariance/matrix), but uses [Bessel's correction](https://en.wikipedia.org/wiki/Bessel%27s_correction) to compute the covariance matrix.
     * 
     * References
     * * [Wikipedia, Sample Mean and Covariance](https://en.wikipedia.org/wiki/Sample_mean_and_covariance)
     * 
    **/
    public openapisdk.models.operations.PostAssetsCovarianceMatrixSampleResponse postAssetsCovarianceMatrixSample(openapisdk.models.operations.PostAssetsCovarianceMatrixSampleRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/assets/covariance/matrix/sample");
        
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

        openapisdk.models.operations.PostAssetsCovarianceMatrixSampleResponse res = new openapisdk.models.operations.PostAssetsCovarianceMatrixSampleResponse() {{
            postAssetsCovarianceMatrixSample200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostAssetsCovarianceMatrixSample200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostAssetsCovarianceMatrixSample200ApplicationJson.class);
                res.postAssetsCovarianceMatrixSample200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postAssetsCovarianceMatrixValidation - Covariance Matrix Validation
     *
     * Validate whether a matrix is a covariance matrix.
     * 
     * References
     * * [Wikipedia, Covariance Matrix](https://en.wikipedia.org/wiki/Covariance_matrix)
     * 
    **/
    public openapisdk.models.operations.PostAssetsCovarianceMatrixValidationResponse postAssetsCovarianceMatrixValidation(openapisdk.models.operations.PostAssetsCovarianceMatrixValidationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/assets/covariance/matrix/validation");
        
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

        openapisdk.models.operations.PostAssetsCovarianceMatrixValidationResponse res = new openapisdk.models.operations.PostAssetsCovarianceMatrixValidationResponse() {{
            postAssetsCovarianceMatrixValidation200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostAssetsCovarianceMatrixValidation200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostAssetsCovarianceMatrixValidation200ApplicationJson.class);
                res.postAssetsCovarianceMatrixValidation200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}