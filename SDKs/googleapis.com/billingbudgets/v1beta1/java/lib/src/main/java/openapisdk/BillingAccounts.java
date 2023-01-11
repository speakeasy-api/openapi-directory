package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class BillingAccounts {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public BillingAccounts(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * billingbudgetsBillingAccountsBudgetsCreate - Creates a new budget. See [Quotas and limits](https://cloud.google.com/billing/quotas) for more information on the limits of the number of budgets you can create.
    **/
    public openapisdk.models.operations.BillingbudgetsBillingAccountsBudgetsCreateResponse billingbudgetsBillingAccountsBudgetsCreate(openapisdk.models.operations.BillingbudgetsBillingAccountsBudgetsCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta1/{parent}/budgets", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.BillingbudgetsBillingAccountsBudgetsCreateResponse res = new openapisdk.models.operations.BillingbudgetsBillingAccountsBudgetsCreateResponse() {{
            googleCloudBillingBudgetsV1beta1Budget = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudBillingBudgetsV1beta1Budget out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudBillingBudgetsV1beta1Budget.class);
                res.googleCloudBillingBudgetsV1beta1Budget = out;
            }
        }

        return res;
    }
	
	
    /**
     * billingbudgetsBillingAccountsBudgetsDelete - Deletes a budget. Returns successfully if already deleted.
    **/
    public openapisdk.models.operations.BillingbudgetsBillingAccountsBudgetsDeleteResponse billingbudgetsBillingAccountsBudgetsDelete(openapisdk.models.operations.BillingbudgetsBillingAccountsBudgetsDeleteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta1/{name}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.BillingbudgetsBillingAccountsBudgetsDeleteResponse res = new openapisdk.models.operations.BillingbudgetsBillingAccountsBudgetsDeleteResponse() {{
            googleProtobufEmpty = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.googleProtobufEmpty = out;
            }
        }

        return res;
    }
	
	
    /**
     * billingbudgetsBillingAccountsBudgetsGet - Returns a budget. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. When reading from the API, you will not see these fields in the return value, though they may have been set in the Cloud Console.
    **/
    public openapisdk.models.operations.BillingbudgetsBillingAccountsBudgetsGetResponse billingbudgetsBillingAccountsBudgetsGet(openapisdk.models.operations.BillingbudgetsBillingAccountsBudgetsGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta1/{name}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.BillingbudgetsBillingAccountsBudgetsGetResponse res = new openapisdk.models.operations.BillingbudgetsBillingAccountsBudgetsGetResponse() {{
            googleCloudBillingBudgetsV1beta1Budget = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudBillingBudgetsV1beta1Budget out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudBillingBudgetsV1beta1Budget.class);
                res.googleCloudBillingBudgetsV1beta1Budget = out;
            }
        }

        return res;
    }
	
	
    /**
     * billingbudgetsBillingAccountsBudgetsList - Returns a list of budgets for a billing account. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. When reading from the API, you will not see these fields in the return value, though they may have been set in the Cloud Console.
    **/
    public openapisdk.models.operations.BillingbudgetsBillingAccountsBudgetsListResponse billingbudgetsBillingAccountsBudgetsList(openapisdk.models.operations.BillingbudgetsBillingAccountsBudgetsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta1/{parent}/budgets", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.BillingbudgetsBillingAccountsBudgetsListResponse res = new openapisdk.models.operations.BillingbudgetsBillingAccountsBudgetsListResponse() {{
            googleCloudBillingBudgetsV1beta1ListBudgetsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudBillingBudgetsV1beta1ListBudgetsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudBillingBudgetsV1beta1ListBudgetsResponse.class);
                res.googleCloudBillingBudgetsV1beta1ListBudgetsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * billingbudgetsBillingAccountsBudgetsPatch - Updates a budget and returns the updated budget. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. Budget fields that are not exposed in this API will not be changed by this method.
    **/
    public openapisdk.models.operations.BillingbudgetsBillingAccountsBudgetsPatchResponse billingbudgetsBillingAccountsBudgetsPatch(openapisdk.models.operations.BillingbudgetsBillingAccountsBudgetsPatchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta1/{name}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.BillingbudgetsBillingAccountsBudgetsPatchResponse res = new openapisdk.models.operations.BillingbudgetsBillingAccountsBudgetsPatchResponse() {{
            googleCloudBillingBudgetsV1beta1Budget = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudBillingBudgetsV1beta1Budget out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudBillingBudgetsV1beta1Budget.class);
                res.googleCloudBillingBudgetsV1beta1Budget = out;
            }
        }

        return res;
    }
	
}