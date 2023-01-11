package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;

public class Classifier {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Classifier(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getABatchOfBusinessTransactionClassificationResults - Get a batch of business transaction classification results.
     *
     * Get a batch of business transaction classification results.
    **/
    public openapisdk.models.operations.GetABatchOfBusinessTransactionClassificationResultsResponse getABatchOfBusinessTransactionClassificationResults(openapisdk.models.operations.GetABatchOfBusinessTransactionClassificationResultsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/classifier/business/batch/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetABatchOfBusinessTransactionClassificationResultsResponse res = new openapisdk.models.operations.GetABatchOfBusinessTransactionClassificationResultsResponse() {{
            getABatchOfBusinessTransactionClassificationResults200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetABatchOfBusinessTransactionClassificationResults200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetABatchOfBusinessTransactionClassificationResults200ApplicationJson.class);
                res.getABatchOfBusinessTransactionClassificationResults200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 500) {
        }

        return res;
    }
	
	
    /**
     * getABatchOfConsumerTransactionClassificationResults - Get a batch of consumer transaction classification results.
     *
     * Get a batch of consumer transaction classification results.
    **/
    public openapisdk.models.operations.GetABatchOfConsumerTransactionClassificationResultsResponse getABatchOfConsumerTransactionClassificationResults(openapisdk.models.operations.GetABatchOfConsumerTransactionClassificationResultsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/classifier/consumer/batch/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetABatchOfConsumerTransactionClassificationResultsResponse res = new openapisdk.models.operations.GetABatchOfConsumerTransactionClassificationResultsResponse() {{
            getABatchOfConsumerTransactionClassificationResults200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetABatchOfConsumerTransactionClassificationResults200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetABatchOfConsumerTransactionClassificationResults200ApplicationJson.class);
                res.getABatchOfConsumerTransactionClassificationResults200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 500) {
        }

        return res;
    }
	
}