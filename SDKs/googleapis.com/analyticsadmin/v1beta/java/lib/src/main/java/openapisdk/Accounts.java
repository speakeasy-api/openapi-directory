package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Accounts {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Accounts(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * analyticsadminAccountsList - Returns all accounts accessible by the caller. Note that these accounts might not currently have GA4 properties. Soft-deleted (ie: "trashed") accounts are excluded by default. Returns an empty list if no relevant accounts are found.
    **/
    public openapisdk.models.operations.AnalyticsadminAccountsListResponse analyticsadminAccountsList(openapisdk.models.operations.AnalyticsadminAccountsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta/accounts");
        
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

        openapisdk.models.operations.AnalyticsadminAccountsListResponse res = new openapisdk.models.operations.AnalyticsadminAccountsListResponse() {{
            googleAnalyticsAdminV1betaListAccountsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleAnalyticsAdminV1betaListAccountsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleAnalyticsAdminV1betaListAccountsResponse.class);
                res.googleAnalyticsAdminV1betaListAccountsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * analyticsadminAccountsProvisionAccountTicket - Requests a ticket for creating an account.
    **/
    public openapisdk.models.operations.AnalyticsadminAccountsProvisionAccountTicketResponse analyticsadminAccountsProvisionAccountTicket(openapisdk.models.operations.AnalyticsadminAccountsProvisionAccountTicketRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta/accounts:provisionAccountTicket");
        
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

        openapisdk.models.operations.AnalyticsadminAccountsProvisionAccountTicketResponse res = new openapisdk.models.operations.AnalyticsadminAccountsProvisionAccountTicketResponse() {{
            googleAnalyticsAdminV1betaProvisionAccountTicketResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleAnalyticsAdminV1betaProvisionAccountTicketResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleAnalyticsAdminV1betaProvisionAccountTicketResponse.class);
                res.googleAnalyticsAdminV1betaProvisionAccountTicketResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * analyticsadminAccountsSearchChangeHistoryEvents - Searches through all changes to an account or its children given the specified set of filters.
    **/
    public openapisdk.models.operations.AnalyticsadminAccountsSearchChangeHistoryEventsResponse analyticsadminAccountsSearchChangeHistoryEvents(openapisdk.models.operations.AnalyticsadminAccountsSearchChangeHistoryEventsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta/{account}:searchChangeHistoryEvents", request.pathParams);
        
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

        openapisdk.models.operations.AnalyticsadminAccountsSearchChangeHistoryEventsResponse res = new openapisdk.models.operations.AnalyticsadminAccountsSearchChangeHistoryEventsResponse() {{
            googleAnalyticsAdminV1betaSearchChangeHistoryEventsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsResponse.class);
                res.googleAnalyticsAdminV1betaSearchChangeHistoryEventsResponse = out;
            }
        }

        return res;
    }
	
}