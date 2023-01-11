package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class FirstAndThirdPartyAudiences {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public FirstAndThirdPartyAudiences(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * displayvideoFirstAndThirdPartyAudiencesCreate - Creates a FirstAndThirdPartyAudience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`
    **/
    public openapisdk.models.operations.DisplayvideoFirstAndThirdPartyAudiencesCreateResponse displayvideoFirstAndThirdPartyAudiencesCreate(openapisdk.models.operations.DisplayvideoFirstAndThirdPartyAudiencesCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/firstAndThirdPartyAudiences");
        
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

        openapisdk.models.operations.DisplayvideoFirstAndThirdPartyAudiencesCreateResponse res = new openapisdk.models.operations.DisplayvideoFirstAndThirdPartyAudiencesCreateResponse() {{
            firstAndThirdPartyAudience = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.FirstAndThirdPartyAudience out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.FirstAndThirdPartyAudience.class);
                res.firstAndThirdPartyAudience = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembers - Updates the member list of a Customer Match audience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`
    **/
    public openapisdk.models.operations.DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersResponse displayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembers(openapisdk.models.operations.DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/firstAndThirdPartyAudiences/{firstAndThirdPartyAudienceId}:editCustomerMatchMembers", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersResponse res = new openapisdk.models.operations.DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersResponse() {{
            editCustomerMatchMembersResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.EditCustomerMatchMembersResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.EditCustomerMatchMembersResponse.class);
                res.editCustomerMatchMembersResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoFirstAndThirdPartyAudiencesGet - Gets a first and third party audience.
    **/
    public openapisdk.models.operations.DisplayvideoFirstAndThirdPartyAudiencesGetResponse displayvideoFirstAndThirdPartyAudiencesGet(openapisdk.models.operations.DisplayvideoFirstAndThirdPartyAudiencesGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/firstAndThirdPartyAudiences/{firstAndThirdPartyAudienceId}", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoFirstAndThirdPartyAudiencesGetResponse res = new openapisdk.models.operations.DisplayvideoFirstAndThirdPartyAudiencesGetResponse() {{
            firstAndThirdPartyAudience = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.FirstAndThirdPartyAudience out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.FirstAndThirdPartyAudience.class);
                res.firstAndThirdPartyAudience = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoFirstAndThirdPartyAudiencesList - Lists first and third party audiences. The order is defined by the order_by parameter.
    **/
    public openapisdk.models.operations.DisplayvideoFirstAndThirdPartyAudiencesListResponse displayvideoFirstAndThirdPartyAudiencesList(openapisdk.models.operations.DisplayvideoFirstAndThirdPartyAudiencesListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/firstAndThirdPartyAudiences");
        
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

        openapisdk.models.operations.DisplayvideoFirstAndThirdPartyAudiencesListResponse res = new openapisdk.models.operations.DisplayvideoFirstAndThirdPartyAudiencesListResponse() {{
            listFirstAndThirdPartyAudiencesResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListFirstAndThirdPartyAudiencesResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListFirstAndThirdPartyAudiencesResponse.class);
                res.listFirstAndThirdPartyAudiencesResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoFirstAndThirdPartyAudiencesPatch - Updates an existing FirstAndThirdPartyAudience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`
    **/
    public openapisdk.models.operations.DisplayvideoFirstAndThirdPartyAudiencesPatchResponse displayvideoFirstAndThirdPartyAudiencesPatch(openapisdk.models.operations.DisplayvideoFirstAndThirdPartyAudiencesPatchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/firstAndThirdPartyAudiences/{firstAndThirdPartyAudienceId}", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoFirstAndThirdPartyAudiencesPatchResponse res = new openapisdk.models.operations.DisplayvideoFirstAndThirdPartyAudiencesPatchResponse() {{
            firstAndThirdPartyAudience = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.FirstAndThirdPartyAudience out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.FirstAndThirdPartyAudience.class);
                res.firstAndThirdPartyAudience = out;
            }
        }

        return res;
    }
	
}