package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Tags {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Tags(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * deleteTransactionsTransactionIdRelationshipsTags - Remove tags from transaction
     *
     * Disassociates one or more tags from a specific transaction. Tags that are
     * not associated are silently ignored. An HTTP `204` is returned on
     * success. The associated tags, along with this request URL, are also
     * exposed via the `tags` relationship on the transaction resource returned
     * from `/transactions/{id}`.
     * 
    **/
    public openapisdk.models.operations.DeleteTransactionsTransactionIdRelationshipsTagsResponse deleteTransactionsTransactionIdRelationshipsTags(openapisdk.models.operations.DeleteTransactionsTransactionIdRelationshipsTagsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/transactions/{transactionId}/relationships/tags", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteTransactionsTransactionIdRelationshipsTagsResponse res = new openapisdk.models.operations.DeleteTransactionsTransactionIdRelationshipsTagsResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * getTags - List tags
     *
     * Retrieve a list of all tags currently in use. The returned list is
     * [paginated](#pagination) and can be scrolled by following the `next`
     * and `prev` links where present. Results are ordered lexicographically.
     * The `transactions` relationship for each tag exposes a link
     * to get the transactions with the given tag.
     * 
    **/
    public openapisdk.models.operations.GetTagsResponse getTags(openapisdk.models.operations.GetTagsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/tags");
        
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

        openapisdk.models.operations.GetTagsResponse res = new openapisdk.models.operations.GetTagsResponse() {{
            listTagsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListTagsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListTagsResponse.class);
                res.listTagsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postTransactionsTransactionIdRelationshipsTags - Add tags to transaction
     *
     * Associates one or more tags with a specific transaction. No more than 6
     * tags may be present on any single transaction. Duplicate tags are
     * silently ignored. An HTTP `204` is returned on success. The associated
     * tags, along with this request URL, are also exposed via the `tags`
     * relationship on the transaction resource returned from
     * `/transactions/{id}`.
     * 
    **/
    public openapisdk.models.operations.PostTransactionsTransactionIdRelationshipsTagsResponse postTransactionsTransactionIdRelationshipsTags(openapisdk.models.operations.PostTransactionsTransactionIdRelationshipsTagsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/transactions/{transactionId}/relationships/tags", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostTransactionsTransactionIdRelationshipsTagsResponse res = new openapisdk.models.operations.PostTransactionsTransactionIdRelationshipsTagsResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
}