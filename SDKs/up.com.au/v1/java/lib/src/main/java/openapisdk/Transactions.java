package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class Transactions {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Transactions(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getAccountsAccountIdTransactions - List transactions by account
     *
     * Retrieve a list of all transactions for a specific account. The returned
     * list is [paginated](#pagination) and can be scrolled by following the
     * `next` and `prev` links where present. To narrow the results to a
     * specific date range pass one or both of `filter[since]` and
     * `filter[until]` in the query string. These filter parameters
     * **should not** be used for pagination. Results are ordered newest first
     * to oldest last.
     * 
    **/
    public openapisdk.models.operations.GetAccountsAccountIdTransactionsResponse getAccountsAccountIdTransactions(openapisdk.models.operations.GetAccountsAccountIdTransactionsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/accounts/{accountId}/transactions", request.pathParams);
        
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

        openapisdk.models.operations.GetAccountsAccountIdTransactionsResponse res = new openapisdk.models.operations.GetAccountsAccountIdTransactionsResponse() {{
            listTransactionsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListTransactionsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListTransactionsResponse.class);
                res.listTransactionsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * getTransactions - List transactions
     *
     * Retrieve a list of all transactions across all accounts for the currently
     * authenticated user. The returned list is [paginated](#pagination) and can
     * be scrolled by following the `next` and `prev` links where present. To
     * narrow the results to a specific date range pass one or both of
     * `filter[since]` and `filter[until]` in the query string. These filter
     * parameters **should not** be used for pagination. Results are ordered
     * newest first to oldest last.
     * 
    **/
    public openapisdk.models.operations.GetTransactionsResponse getTransactions(openapisdk.models.operations.GetTransactionsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/transactions");
        
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

        openapisdk.models.operations.GetTransactionsResponse res = new openapisdk.models.operations.GetTransactionsResponse() {{
            listTransactionsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListTransactionsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListTransactionsResponse.class);
                res.listTransactionsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * getTransactionsId - Retrieve transaction
     *
     * Retrieve a specific transaction by providing its unique identifier.
     * 
    **/
    public openapisdk.models.operations.GetTransactionsIdResponse getTransactionsId(openapisdk.models.operations.GetTransactionsIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/transactions/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetTransactionsIdResponse res = new openapisdk.models.operations.GetTransactionsIdResponse() {{
            getTransactionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GetTransactionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GetTransactionResponse.class);
                res.getTransactionResponse = out;
            }
        }

        return res;
    }
	
}