package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class AssetsCorrelationMatrix {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public AssetsCorrelationMatrix(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * postAssetsCorrelationMatrix - Correlation Matrix
     *
     * Compute the Pearson correlation matrix of assets from either:  
     * * The assets returns
     * * The assets covariance matrix
     * 
     * References
     * * [Wikipedia, Correlation and Dependence](https://en.wikipedia.org/wiki/Correlation_and_dependence#Correlation_matrices)
     * 
    **/
    public openapisdk.models.operations.PostAssetsCorrelationMatrixResponse postAssetsCorrelationMatrix(openapisdk.models.operations.PostAssetsCorrelationMatrixRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/assets/correlation/matrix");
        
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

        openapisdk.models.operations.PostAssetsCorrelationMatrixResponse res = new openapisdk.models.operations.PostAssetsCorrelationMatrixResponse() {{
            postAssetsCorrelationMatrix200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostAssetsCorrelationMatrix200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostAssetsCorrelationMatrix200ApplicationJson.class);
                res.postAssetsCorrelationMatrix200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postAssetsCorrelationMatrixNearest - Nearest Correlation Matrix
     *
     * Compute the _closest_ correlation matrix to an approximate assets correlation matrix, optionally keeping a selected number of correlations fixed, _closest_ being defined in terms of [the Frobenius norm](https://en.wikipedia.org/wiki/Matrix_norm#Frobenius_norm).
     * 
     * References
     * * [Nicholas J. Higham, Computing the Nearest Correlation Matrix—A Problem from Finance, IMA J. Numer. Anal. 22, 329–343, 2002.](http://www.maths.manchester.ac.uk/~higham/narep/narep369.pdf)
     * 
    **/
    public openapisdk.models.operations.PostAssetsCorrelationMatrixNearestResponse postAssetsCorrelationMatrixNearest(openapisdk.models.operations.PostAssetsCorrelationMatrixNearestRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/assets/correlation/matrix/nearest");
        
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

        openapisdk.models.operations.PostAssetsCorrelationMatrixNearestResponse res = new openapisdk.models.operations.PostAssetsCorrelationMatrixNearestResponse() {{
            postAssetsCorrelationMatrixNearest200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostAssetsCorrelationMatrixNearest200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostAssetsCorrelationMatrixNearest200ApplicationJson.class);
                res.postAssetsCorrelationMatrixNearest200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postAssetsCorrelationMatrixShrinkage - Correlation Matrix Shrinkage
     *
     * Compute a correlation matrix as a weighted average of an assets correlation matrix and a target correlation matrix, the target correlation matrix being either:  
     * * An equicorrelation matrix made of 1
     * * An equicorrelation matrix made of 0
     * * An equicorrelation matrix made of -1/(n-1), with n the number of assets
     * * A provided correlation matrix
     * 
     * References
     * * [Steiner, Andreas, Manipulating Valid Correlation Matrices](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1878165)
     * 
    **/
    public openapisdk.models.operations.PostAssetsCorrelationMatrixShrinkageResponse postAssetsCorrelationMatrixShrinkage(openapisdk.models.operations.PostAssetsCorrelationMatrixShrinkageRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/assets/correlation/matrix/shrinkage");
        
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

        openapisdk.models.operations.PostAssetsCorrelationMatrixShrinkageResponse res = new openapisdk.models.operations.PostAssetsCorrelationMatrixShrinkageResponse() {{
            postAssetsCorrelationMatrixShrinkage200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostAssetsCorrelationMatrixShrinkage200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostAssetsCorrelationMatrixShrinkage200ApplicationJson.class);
                res.postAssetsCorrelationMatrixShrinkage200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postAssetsCorrelationMatrixValidation - Correlation Matrix Validation
     *
     * Validate whether a matrix is a correlation matrix.
     * 
     * References
     * * [Wikipedia, Correlation and Dependence](https://en.wikipedia.org/wiki/Correlation_and_dependence#Correlation_matrices)
     * 
    **/
    public openapisdk.models.operations.PostAssetsCorrelationMatrixValidationResponse postAssetsCorrelationMatrixValidation(openapisdk.models.operations.PostAssetsCorrelationMatrixValidationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/assets/correlation/matrix/validation");
        
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

        openapisdk.models.operations.PostAssetsCorrelationMatrixValidationResponse res = new openapisdk.models.operations.PostAssetsCorrelationMatrixValidationResponse() {{
            postAssetsCorrelationMatrixValidation200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostAssetsCorrelationMatrixValidation200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostAssetsCorrelationMatrixValidation200ApplicationJson.class);
                res.postAssetsCorrelationMatrixValidation200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}