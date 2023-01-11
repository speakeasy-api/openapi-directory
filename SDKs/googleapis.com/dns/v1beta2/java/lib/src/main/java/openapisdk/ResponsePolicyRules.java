package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class ResponsePolicyRules {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public ResponsePolicyRules(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * dnsResponsePolicyRulesCreate - Creates a new Response Policy Rule.
    **/
    public openapisdk.models.operations.DnsResponsePolicyRulesCreateResponse dnsResponsePolicyRulesCreate(openapisdk.models.operations.DnsResponsePolicyRulesCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/dns/v1beta2/projects/{project}/responsePolicies/{responsePolicy}/rules", request.pathParams);
        
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

        openapisdk.models.operations.DnsResponsePolicyRulesCreateResponse res = new openapisdk.models.operations.DnsResponsePolicyRulesCreateResponse() {{
            responsePolicyRule = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ResponsePolicyRule out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ResponsePolicyRule.class);
                res.responsePolicyRule = out;
            }
        }

        return res;
    }
	
	
    /**
     * dnsResponsePolicyRulesDelete - Deletes a previously created Response Policy Rule.
    **/
    public openapisdk.models.operations.DnsResponsePolicyRulesDeleteResponse dnsResponsePolicyRulesDelete(openapisdk.models.operations.DnsResponsePolicyRulesDeleteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/dns/v1beta2/projects/{project}/responsePolicies/{responsePolicy}/rules/{responsePolicyRule}", request.pathParams);
        
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

        openapisdk.models.operations.DnsResponsePolicyRulesDeleteResponse res = new openapisdk.models.operations.DnsResponsePolicyRulesDeleteResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * dnsResponsePolicyRulesGet - Fetches the representation of an existing Response Policy Rule.
    **/
    public openapisdk.models.operations.DnsResponsePolicyRulesGetResponse dnsResponsePolicyRulesGet(openapisdk.models.operations.DnsResponsePolicyRulesGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/dns/v1beta2/projects/{project}/responsePolicies/{responsePolicy}/rules/{responsePolicyRule}", request.pathParams);
        
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

        openapisdk.models.operations.DnsResponsePolicyRulesGetResponse res = new openapisdk.models.operations.DnsResponsePolicyRulesGetResponse() {{
            responsePolicyRule = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ResponsePolicyRule out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ResponsePolicyRule.class);
                res.responsePolicyRule = out;
            }
        }

        return res;
    }
	
	
    /**
     * dnsResponsePolicyRulesList - Enumerates all Response Policy Rules associated with a project.
    **/
    public openapisdk.models.operations.DnsResponsePolicyRulesListResponse dnsResponsePolicyRulesList(openapisdk.models.operations.DnsResponsePolicyRulesListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/dns/v1beta2/projects/{project}/responsePolicies/{responsePolicy}/rules", request.pathParams);
        
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

        openapisdk.models.operations.DnsResponsePolicyRulesListResponse res = new openapisdk.models.operations.DnsResponsePolicyRulesListResponse() {{
            responsePolicyRulesListResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ResponsePolicyRulesListResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ResponsePolicyRulesListResponse.class);
                res.responsePolicyRulesListResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * dnsResponsePolicyRulesPatch - Applies a partial update to an existing Response Policy Rule.
    **/
    public openapisdk.models.operations.DnsResponsePolicyRulesPatchResponse dnsResponsePolicyRulesPatch(openapisdk.models.operations.DnsResponsePolicyRulesPatchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/dns/v1beta2/projects/{project}/responsePolicies/{responsePolicy}/rules/{responsePolicyRule}", request.pathParams);
        
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

        openapisdk.models.operations.DnsResponsePolicyRulesPatchResponse res = new openapisdk.models.operations.DnsResponsePolicyRulesPatchResponse() {{
            responsePolicyRulesPatchResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ResponsePolicyRulesPatchResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ResponsePolicyRulesPatchResponse.class);
                res.responsePolicyRulesPatchResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * dnsResponsePolicyRulesUpdate - Updates an existing Response Policy Rule.
    **/
    public openapisdk.models.operations.DnsResponsePolicyRulesUpdateResponse dnsResponsePolicyRulesUpdate(openapisdk.models.operations.DnsResponsePolicyRulesUpdateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/dns/v1beta2/projects/{project}/responsePolicies/{responsePolicy}/rules/{responsePolicyRule}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
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

        openapisdk.models.operations.DnsResponsePolicyRulesUpdateResponse res = new openapisdk.models.operations.DnsResponsePolicyRulesUpdateResponse() {{
            responsePolicyRulesUpdateResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ResponsePolicyRulesUpdateResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ResponsePolicyRulesUpdateResponse.class);
                res.responsePolicyRulesUpdateResponse = out;
            }
        }

        return res;
    }
	
}