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
     * adexchangebuyer2AccountsClientsCreate - Creates a new client buyer.
    **/
    public openapisdk.models.operations.Adexchangebuyer2AccountsClientsCreateResponse adexchangebuyer2AccountsClientsCreate(openapisdk.models.operations.Adexchangebuyer2AccountsClientsCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta1/accounts/{accountId}/clients", request.pathParams);
        
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

        openapisdk.models.operations.Adexchangebuyer2AccountsClientsCreateResponse res = new openapisdk.models.operations.Adexchangebuyer2AccountsClientsCreateResponse() {{
            client = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Client out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Client.class);
                res.client = out;
            }
        }

        return res;
    }
	
	
    /**
     * adexchangebuyer2AccountsClientsGet - Gets a client buyer with a given client account ID.
    **/
    public openapisdk.models.operations.Adexchangebuyer2AccountsClientsGetResponse adexchangebuyer2AccountsClientsGet(openapisdk.models.operations.Adexchangebuyer2AccountsClientsGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta1/accounts/{accountId}/clients/{clientAccountId}", request.pathParams);
        
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

        openapisdk.models.operations.Adexchangebuyer2AccountsClientsGetResponse res = new openapisdk.models.operations.Adexchangebuyer2AccountsClientsGetResponse() {{
            client = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Client out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Client.class);
                res.client = out;
            }
        }

        return res;
    }
	
	
    /**
     * adexchangebuyer2AccountsClientsInvitationsCreate - Creates and sends out an email invitation to access an Ad Exchange client buyer account.
    **/
    public openapisdk.models.operations.Adexchangebuyer2AccountsClientsInvitationsCreateResponse adexchangebuyer2AccountsClientsInvitationsCreate(openapisdk.models.operations.Adexchangebuyer2AccountsClientsInvitationsCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta1/accounts/{accountId}/clients/{clientAccountId}/invitations", request.pathParams);
        
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

        openapisdk.models.operations.Adexchangebuyer2AccountsClientsInvitationsCreateResponse res = new openapisdk.models.operations.Adexchangebuyer2AccountsClientsInvitationsCreateResponse() {{
            clientUserInvitation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ClientUserInvitation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ClientUserInvitation.class);
                res.clientUserInvitation = out;
            }
        }

        return res;
    }
	
	
    /**
     * adexchangebuyer2AccountsClientsInvitationsGet - Retrieves an existing client user invitation.
    **/
    public openapisdk.models.operations.Adexchangebuyer2AccountsClientsInvitationsGetResponse adexchangebuyer2AccountsClientsInvitationsGet(openapisdk.models.operations.Adexchangebuyer2AccountsClientsInvitationsGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta1/accounts/{accountId}/clients/{clientAccountId}/invitations/{invitationId}", request.pathParams);
        
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

        openapisdk.models.operations.Adexchangebuyer2AccountsClientsInvitationsGetResponse res = new openapisdk.models.operations.Adexchangebuyer2AccountsClientsInvitationsGetResponse() {{
            clientUserInvitation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ClientUserInvitation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ClientUserInvitation.class);
                res.clientUserInvitation = out;
            }
        }

        return res;
    }
	
	
    /**
     * adexchangebuyer2AccountsClientsInvitationsList - Lists all the client users invitations for a client with a given account ID.
    **/
    public openapisdk.models.operations.Adexchangebuyer2AccountsClientsInvitationsListResponse adexchangebuyer2AccountsClientsInvitationsList(openapisdk.models.operations.Adexchangebuyer2AccountsClientsInvitationsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta1/accounts/{accountId}/clients/{clientAccountId}/invitations", request.pathParams);
        
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

        openapisdk.models.operations.Adexchangebuyer2AccountsClientsInvitationsListResponse res = new openapisdk.models.operations.Adexchangebuyer2AccountsClientsInvitationsListResponse() {{
            listClientUserInvitationsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListClientUserInvitationsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListClientUserInvitationsResponse.class);
                res.listClientUserInvitationsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * adexchangebuyer2AccountsClientsList - Lists all the clients for the current sponsor buyer.
    **/
    public openapisdk.models.operations.Adexchangebuyer2AccountsClientsListResponse adexchangebuyer2AccountsClientsList(openapisdk.models.operations.Adexchangebuyer2AccountsClientsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta1/accounts/{accountId}/clients", request.pathParams);
        
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

        openapisdk.models.operations.Adexchangebuyer2AccountsClientsListResponse res = new openapisdk.models.operations.Adexchangebuyer2AccountsClientsListResponse() {{
            listClientsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListClientsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListClientsResponse.class);
                res.listClientsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * adexchangebuyer2AccountsClientsUpdate - Updates an existing client buyer.
    **/
    public openapisdk.models.operations.Adexchangebuyer2AccountsClientsUpdateResponse adexchangebuyer2AccountsClientsUpdate(openapisdk.models.operations.Adexchangebuyer2AccountsClientsUpdateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta1/accounts/{accountId}/clients/{clientAccountId}", request.pathParams);
        
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

        openapisdk.models.operations.Adexchangebuyer2AccountsClientsUpdateResponse res = new openapisdk.models.operations.Adexchangebuyer2AccountsClientsUpdateResponse() {{
            client = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Client out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Client.class);
                res.client = out;
            }
        }

        return res;
    }
	
	
    /**
     * adexchangebuyer2AccountsClientsUsersGet - Retrieves an existing client user.
    **/
    public openapisdk.models.operations.Adexchangebuyer2AccountsClientsUsersGetResponse adexchangebuyer2AccountsClientsUsersGet(openapisdk.models.operations.Adexchangebuyer2AccountsClientsUsersGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta1/accounts/{accountId}/clients/{clientAccountId}/users/{userId}", request.pathParams);
        
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

        openapisdk.models.operations.Adexchangebuyer2AccountsClientsUsersGetResponse res = new openapisdk.models.operations.Adexchangebuyer2AccountsClientsUsersGetResponse() {{
            clientUser = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ClientUser out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ClientUser.class);
                res.clientUser = out;
            }
        }

        return res;
    }
	
	
    /**
     * adexchangebuyer2AccountsClientsUsersList - Lists all the known client users for a specified sponsor buyer account ID.
    **/
    public openapisdk.models.operations.Adexchangebuyer2AccountsClientsUsersListResponse adexchangebuyer2AccountsClientsUsersList(openapisdk.models.operations.Adexchangebuyer2AccountsClientsUsersListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta1/accounts/{accountId}/clients/{clientAccountId}/users", request.pathParams);
        
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

        openapisdk.models.operations.Adexchangebuyer2AccountsClientsUsersListResponse res = new openapisdk.models.operations.Adexchangebuyer2AccountsClientsUsersListResponse() {{
            listClientUsersResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListClientUsersResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListClientUsersResponse.class);
                res.listClientUsersResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * adexchangebuyer2AccountsClientsUsersUpdate - Updates an existing client user. Only the user status can be changed on update.
    **/
    public openapisdk.models.operations.Adexchangebuyer2AccountsClientsUsersUpdateResponse adexchangebuyer2AccountsClientsUsersUpdate(openapisdk.models.operations.Adexchangebuyer2AccountsClientsUsersUpdateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta1/accounts/{accountId}/clients/{clientAccountId}/users/{userId}", request.pathParams);
        
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

        openapisdk.models.operations.Adexchangebuyer2AccountsClientsUsersUpdateResponse res = new openapisdk.models.operations.Adexchangebuyer2AccountsClientsUsersUpdateResponse() {{
            clientUser = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ClientUser out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ClientUser.class);
                res.clientUser = out;
            }
        }

        return res;
    }
	
	
    /**
     * adexchangebuyer2AccountsCreativesCreate - Creates a creative.
    **/
    public openapisdk.models.operations.Adexchangebuyer2AccountsCreativesCreateResponse adexchangebuyer2AccountsCreativesCreate(openapisdk.models.operations.Adexchangebuyer2AccountsCreativesCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta1/accounts/{accountId}/creatives", request.pathParams);
        
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

        openapisdk.models.operations.Adexchangebuyer2AccountsCreativesCreateResponse res = new openapisdk.models.operations.Adexchangebuyer2AccountsCreativesCreateResponse() {{
            creative = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Creative out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Creative.class);
                res.creative = out;
            }
        }

        return res;
    }
	
	
    /**
     * adexchangebuyer2AccountsCreativesDealAssociationsAdd - Associate an existing deal with a creative.
    **/
    public openapisdk.models.operations.Adexchangebuyer2AccountsCreativesDealAssociationsAddResponse adexchangebuyer2AccountsCreativesDealAssociationsAdd(openapisdk.models.operations.Adexchangebuyer2AccountsCreativesDealAssociationsAddRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta1/accounts/{accountId}/creatives/{creativeId}/dealAssociations:add", request.pathParams);
        
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

        openapisdk.models.operations.Adexchangebuyer2AccountsCreativesDealAssociationsAddResponse res = new openapisdk.models.operations.Adexchangebuyer2AccountsCreativesDealAssociationsAddResponse() {{
            empty = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.empty = out;
            }
        }

        return res;
    }
	
	
    /**
     * adexchangebuyer2AccountsCreativesDealAssociationsList - List all creative-deal associations.
    **/
    public openapisdk.models.operations.Adexchangebuyer2AccountsCreativesDealAssociationsListResponse adexchangebuyer2AccountsCreativesDealAssociationsList(openapisdk.models.operations.Adexchangebuyer2AccountsCreativesDealAssociationsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta1/accounts/{accountId}/creatives/{creativeId}/dealAssociations", request.pathParams);
        
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

        openapisdk.models.operations.Adexchangebuyer2AccountsCreativesDealAssociationsListResponse res = new openapisdk.models.operations.Adexchangebuyer2AccountsCreativesDealAssociationsListResponse() {{
            listDealAssociationsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListDealAssociationsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListDealAssociationsResponse.class);
                res.listDealAssociationsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * adexchangebuyer2AccountsCreativesDealAssociationsRemove - Remove the association between a deal and a creative.
    **/
    public openapisdk.models.operations.Adexchangebuyer2AccountsCreativesDealAssociationsRemoveResponse adexchangebuyer2AccountsCreativesDealAssociationsRemove(openapisdk.models.operations.Adexchangebuyer2AccountsCreativesDealAssociationsRemoveRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta1/accounts/{accountId}/creatives/{creativeId}/dealAssociations:remove", request.pathParams);
        
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

        openapisdk.models.operations.Adexchangebuyer2AccountsCreativesDealAssociationsRemoveResponse res = new openapisdk.models.operations.Adexchangebuyer2AccountsCreativesDealAssociationsRemoveResponse() {{
            empty = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.empty = out;
            }
        }

        return res;
    }
	
	
    /**
     * adexchangebuyer2AccountsCreativesGet - Gets a creative.
    **/
    public openapisdk.models.operations.Adexchangebuyer2AccountsCreativesGetResponse adexchangebuyer2AccountsCreativesGet(openapisdk.models.operations.Adexchangebuyer2AccountsCreativesGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta1/accounts/{accountId}/creatives/{creativeId}", request.pathParams);
        
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

        openapisdk.models.operations.Adexchangebuyer2AccountsCreativesGetResponse res = new openapisdk.models.operations.Adexchangebuyer2AccountsCreativesGetResponse() {{
            creative = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Creative out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Creative.class);
                res.creative = out;
            }
        }

        return res;
    }
	
	
    /**
     * adexchangebuyer2AccountsCreativesList - Lists creatives.
    **/
    public openapisdk.models.operations.Adexchangebuyer2AccountsCreativesListResponse adexchangebuyer2AccountsCreativesList(openapisdk.models.operations.Adexchangebuyer2AccountsCreativesListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta1/accounts/{accountId}/creatives", request.pathParams);
        
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

        openapisdk.models.operations.Adexchangebuyer2AccountsCreativesListResponse res = new openapisdk.models.operations.Adexchangebuyer2AccountsCreativesListResponse() {{
            listCreativesResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListCreativesResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListCreativesResponse.class);
                res.listCreativesResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * adexchangebuyer2AccountsCreativesStopWatching - Stops watching a creative. Will stop push notifications being sent to the topics when the creative changes status.
    **/
    public openapisdk.models.operations.Adexchangebuyer2AccountsCreativesStopWatchingResponse adexchangebuyer2AccountsCreativesStopWatching(openapisdk.models.operations.Adexchangebuyer2AccountsCreativesStopWatchingRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta1/accounts/{accountId}/creatives/{creativeId}:stopWatching", request.pathParams);
        
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

        openapisdk.models.operations.Adexchangebuyer2AccountsCreativesStopWatchingResponse res = new openapisdk.models.operations.Adexchangebuyer2AccountsCreativesStopWatchingResponse() {{
            empty = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.empty = out;
            }
        }

        return res;
    }
	
	
    /**
     * adexchangebuyer2AccountsCreativesUpdate - Updates a creative.
    **/
    public openapisdk.models.operations.Adexchangebuyer2AccountsCreativesUpdateResponse adexchangebuyer2AccountsCreativesUpdate(openapisdk.models.operations.Adexchangebuyer2AccountsCreativesUpdateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta1/accounts/{accountId}/creatives/{creativeId}", request.pathParams);
        
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

        openapisdk.models.operations.Adexchangebuyer2AccountsCreativesUpdateResponse res = new openapisdk.models.operations.Adexchangebuyer2AccountsCreativesUpdateResponse() {{
            creative = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Creative out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Creative.class);
                res.creative = out;
            }
        }

        return res;
    }
	
	
    /**
     * adexchangebuyer2AccountsCreativesWatch - Watches a creative. Will result in push notifications being sent to the topic when the creative changes status.
    **/
    public openapisdk.models.operations.Adexchangebuyer2AccountsCreativesWatchResponse adexchangebuyer2AccountsCreativesWatch(openapisdk.models.operations.Adexchangebuyer2AccountsCreativesWatchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta1/accounts/{accountId}/creatives/{creativeId}:watch", request.pathParams);
        
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

        openapisdk.models.operations.Adexchangebuyer2AccountsCreativesWatchResponse res = new openapisdk.models.operations.Adexchangebuyer2AccountsCreativesWatchResponse() {{
            empty = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.empty = out;
            }
        }

        return res;
    }
	
	
    /**
     * adexchangebuyer2AccountsFinalizedProposalsList - List finalized proposals, regardless if a proposal is being renegotiated. A filter expression (PQL query) may be specified to filter the results. The notes will not be returned.
    **/
    public openapisdk.models.operations.Adexchangebuyer2AccountsFinalizedProposalsListResponse adexchangebuyer2AccountsFinalizedProposalsList(openapisdk.models.operations.Adexchangebuyer2AccountsFinalizedProposalsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta1/accounts/{accountId}/finalizedProposals", request.pathParams);
        
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

        openapisdk.models.operations.Adexchangebuyer2AccountsFinalizedProposalsListResponse res = new openapisdk.models.operations.Adexchangebuyer2AccountsFinalizedProposalsListResponse() {{
            listProposalsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListProposalsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListProposalsResponse.class);
                res.listProposalsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * adexchangebuyer2AccountsFinalizedProposalsPause - Update given deals to pause serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to true for all listed deals in the request. Currently, this method only applies to PG and PD deals. For PA deals, call accounts.proposals.pause endpoint. It is a no-op to pause already-paused deals. It is an error to call PauseProposalDeals for deals which are not part of the proposal of proposal_id or which are not finalized or renegotiating.
    **/
    public openapisdk.models.operations.Adexchangebuyer2AccountsFinalizedProposalsPauseResponse adexchangebuyer2AccountsFinalizedProposalsPause(openapisdk.models.operations.Adexchangebuyer2AccountsFinalizedProposalsPauseRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta1/accounts/{accountId}/finalizedProposals/{proposalId}:pause", request.pathParams);
        
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

        openapisdk.models.operations.Adexchangebuyer2AccountsFinalizedProposalsPauseResponse res = new openapisdk.models.operations.Adexchangebuyer2AccountsFinalizedProposalsPauseResponse() {{
            proposal = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Proposal out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Proposal.class);
                res.proposal = out;
            }
        }

        return res;
    }
	
	
    /**
     * adexchangebuyer2AccountsFinalizedProposalsResume - Update given deals to resume serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to false for all listed deals in the request. Currently, this method only applies to PG and PD deals. For PA deals, call accounts.proposals.resume endpoint. It is a no-op to resume running deals or deals paused by the other party. It is an error to call ResumeProposalDeals for deals which are not part of the proposal of proposal_id or which are not finalized or renegotiating.
    **/
    public openapisdk.models.operations.Adexchangebuyer2AccountsFinalizedProposalsResumeResponse adexchangebuyer2AccountsFinalizedProposalsResume(openapisdk.models.operations.Adexchangebuyer2AccountsFinalizedProposalsResumeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta1/accounts/{accountId}/finalizedProposals/{proposalId}:resume", request.pathParams);
        
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

        openapisdk.models.operations.Adexchangebuyer2AccountsFinalizedProposalsResumeResponse res = new openapisdk.models.operations.Adexchangebuyer2AccountsFinalizedProposalsResumeResponse() {{
            proposal = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Proposal out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Proposal.class);
                res.proposal = out;
            }
        }

        return res;
    }
	
	
    /**
     * adexchangebuyer2AccountsProductsGet - Gets the requested product by ID.
    **/
    public openapisdk.models.operations.Adexchangebuyer2AccountsProductsGetResponse adexchangebuyer2AccountsProductsGet(openapisdk.models.operations.Adexchangebuyer2AccountsProductsGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta1/accounts/{accountId}/products/{productId}", request.pathParams);
        
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

        openapisdk.models.operations.Adexchangebuyer2AccountsProductsGetResponse res = new openapisdk.models.operations.Adexchangebuyer2AccountsProductsGetResponse() {{
            product = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Product out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Product.class);
                res.product = out;
            }
        }

        return res;
    }
	
	
    /**
     * adexchangebuyer2AccountsProductsList - List all products visible to the buyer (optionally filtered by the specified PQL query).
    **/
    public openapisdk.models.operations.Adexchangebuyer2AccountsProductsListResponse adexchangebuyer2AccountsProductsList(openapisdk.models.operations.Adexchangebuyer2AccountsProductsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta1/accounts/{accountId}/products", request.pathParams);
        
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

        openapisdk.models.operations.Adexchangebuyer2AccountsProductsListResponse res = new openapisdk.models.operations.Adexchangebuyer2AccountsProductsListResponse() {{
            listProductsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListProductsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListProductsResponse.class);
                res.listProductsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * adexchangebuyer2AccountsProposalsAccept - Mark the proposal as accepted at the given revision number. If the number does not match the server's revision number an `ABORTED` error message will be returned. This call updates the proposal_state from `PROPOSED` to `BUYER_ACCEPTED`, or from `SELLER_ACCEPTED` to `FINALIZED`. Upon calling this endpoint, the buyer implicitly agrees to the terms and conditions optionally set within the proposal by the publisher.
    **/
    public openapisdk.models.operations.Adexchangebuyer2AccountsProposalsAcceptResponse adexchangebuyer2AccountsProposalsAccept(openapisdk.models.operations.Adexchangebuyer2AccountsProposalsAcceptRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta1/accounts/{accountId}/proposals/{proposalId}:accept", request.pathParams);
        
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

        openapisdk.models.operations.Adexchangebuyer2AccountsProposalsAcceptResponse res = new openapisdk.models.operations.Adexchangebuyer2AccountsProposalsAcceptResponse() {{
            proposal = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Proposal out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Proposal.class);
                res.proposal = out;
            }
        }

        return res;
    }
	
	
    /**
     * adexchangebuyer2AccountsProposalsAddNote - Create a new note and attach it to the proposal. The note is assigned a unique ID by the server. The proposal revision number will not increase when associated with a new note.
    **/
    public openapisdk.models.operations.Adexchangebuyer2AccountsProposalsAddNoteResponse adexchangebuyer2AccountsProposalsAddNote(openapisdk.models.operations.Adexchangebuyer2AccountsProposalsAddNoteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta1/accounts/{accountId}/proposals/{proposalId}:addNote", request.pathParams);
        
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

        openapisdk.models.operations.Adexchangebuyer2AccountsProposalsAddNoteResponse res = new openapisdk.models.operations.Adexchangebuyer2AccountsProposalsAddNoteResponse() {{
            note = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Note out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Note.class);
                res.note = out;
            }
        }

        return res;
    }
	
	
    /**
     * adexchangebuyer2AccountsProposalsCancelNegotiation - Cancel an ongoing negotiation on a proposal. This does not cancel or end serving for the deals if the proposal has been finalized, but only cancels a negotiation unilaterally.
    **/
    public openapisdk.models.operations.Adexchangebuyer2AccountsProposalsCancelNegotiationResponse adexchangebuyer2AccountsProposalsCancelNegotiation(openapisdk.models.operations.Adexchangebuyer2AccountsProposalsCancelNegotiationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta1/accounts/{accountId}/proposals/{proposalId}:cancelNegotiation", request.pathParams);
        
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

        openapisdk.models.operations.Adexchangebuyer2AccountsProposalsCancelNegotiationResponse res = new openapisdk.models.operations.Adexchangebuyer2AccountsProposalsCancelNegotiationResponse() {{
            proposal = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Proposal out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Proposal.class);
                res.proposal = out;
            }
        }

        return res;
    }
	
	
    /**
     * adexchangebuyer2AccountsProposalsCompleteSetup - You can opt-in to manually update proposals to indicate that setup is complete. By default, proposal setup is automatically completed after their deals are finalized. Contact your Technical Account Manager to opt in. Buyers can call this method when the proposal has been finalized, and all the required creatives have been uploaded using the Creatives API. This call updates the `is_setup_completed` field on the deals in the proposal, and notifies the seller. The server then advances the revision number of the most recent proposal. To mark an individual deal as ready to serve, call `buyers.finalizedDeals.setReadyToServe` in the Marketplace API.
    **/
    public openapisdk.models.operations.Adexchangebuyer2AccountsProposalsCompleteSetupResponse adexchangebuyer2AccountsProposalsCompleteSetup(openapisdk.models.operations.Adexchangebuyer2AccountsProposalsCompleteSetupRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta1/accounts/{accountId}/proposals/{proposalId}:completeSetup", request.pathParams);
        
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

        openapisdk.models.operations.Adexchangebuyer2AccountsProposalsCompleteSetupResponse res = new openapisdk.models.operations.Adexchangebuyer2AccountsProposalsCompleteSetupResponse() {{
            proposal = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Proposal out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Proposal.class);
                res.proposal = out;
            }
        }

        return res;
    }
	
	
    /**
     * adexchangebuyer2AccountsProposalsCreate - Create the given proposal. Each created proposal and any deals it contains are assigned a unique ID by the server.
    **/
    public openapisdk.models.operations.Adexchangebuyer2AccountsProposalsCreateResponse adexchangebuyer2AccountsProposalsCreate(openapisdk.models.operations.Adexchangebuyer2AccountsProposalsCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta1/accounts/{accountId}/proposals", request.pathParams);
        
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

        openapisdk.models.operations.Adexchangebuyer2AccountsProposalsCreateResponse res = new openapisdk.models.operations.Adexchangebuyer2AccountsProposalsCreateResponse() {{
            proposal = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Proposal out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Proposal.class);
                res.proposal = out;
            }
        }

        return res;
    }
	
	
    /**
     * adexchangebuyer2AccountsProposalsGet - Gets a proposal given its ID. The proposal is returned at its head revision.
    **/
    public openapisdk.models.operations.Adexchangebuyer2AccountsProposalsGetResponse adexchangebuyer2AccountsProposalsGet(openapisdk.models.operations.Adexchangebuyer2AccountsProposalsGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta1/accounts/{accountId}/proposals/{proposalId}", request.pathParams);
        
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

        openapisdk.models.operations.Adexchangebuyer2AccountsProposalsGetResponse res = new openapisdk.models.operations.Adexchangebuyer2AccountsProposalsGetResponse() {{
            proposal = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Proposal out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Proposal.class);
                res.proposal = out;
            }
        }

        return res;
    }
	
	
    /**
     * adexchangebuyer2AccountsProposalsList - List proposals. A filter expression (PQL query) may be specified to filter the results. To retrieve all finalized proposals, regardless if a proposal is being renegotiated, see the FinalizedProposals resource. Note that Bidder/ChildSeat relationships differ from the usual behavior. A Bidder account can only see its child seats' proposals by specifying the ChildSeat's accountId in the request path.
    **/
    public openapisdk.models.operations.Adexchangebuyer2AccountsProposalsListResponse adexchangebuyer2AccountsProposalsList(openapisdk.models.operations.Adexchangebuyer2AccountsProposalsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta1/accounts/{accountId}/proposals", request.pathParams);
        
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

        openapisdk.models.operations.Adexchangebuyer2AccountsProposalsListResponse res = new openapisdk.models.operations.Adexchangebuyer2AccountsProposalsListResponse() {{
            listProposalsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListProposalsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListProposalsResponse.class);
                res.listProposalsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * adexchangebuyer2AccountsProposalsPause - Update the given proposal to pause serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to true for all deals in the proposal. It is a no-op to pause an already-paused proposal. It is an error to call PauseProposal for a proposal that is not finalized or renegotiating.
    **/
    public openapisdk.models.operations.Adexchangebuyer2AccountsProposalsPauseResponse adexchangebuyer2AccountsProposalsPause(openapisdk.models.operations.Adexchangebuyer2AccountsProposalsPauseRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta1/accounts/{accountId}/proposals/{proposalId}:pause", request.pathParams);
        
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

        openapisdk.models.operations.Adexchangebuyer2AccountsProposalsPauseResponse res = new openapisdk.models.operations.Adexchangebuyer2AccountsProposalsPauseResponse() {{
            proposal = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Proposal out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Proposal.class);
                res.proposal = out;
            }
        }

        return res;
    }
	
	
    /**
     * adexchangebuyer2AccountsProposalsResume - Update the given proposal to resume serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to false for all deals in the proposal. Note that if the `has_seller_paused` bit is also set, serving will not resume until the seller also resumes. It is a no-op to resume an already-running proposal. It is an error to call ResumeProposal for a proposal that is not finalized or renegotiating.
    **/
    public openapisdk.models.operations.Adexchangebuyer2AccountsProposalsResumeResponse adexchangebuyer2AccountsProposalsResume(openapisdk.models.operations.Adexchangebuyer2AccountsProposalsResumeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta1/accounts/{accountId}/proposals/{proposalId}:resume", request.pathParams);
        
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

        openapisdk.models.operations.Adexchangebuyer2AccountsProposalsResumeResponse res = new openapisdk.models.operations.Adexchangebuyer2AccountsProposalsResumeResponse() {{
            proposal = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Proposal out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Proposal.class);
                res.proposal = out;
            }
        }

        return res;
    }
	
	
    /**
     * adexchangebuyer2AccountsProposalsUpdate - Update the given proposal at the client known revision number. If the server revision has advanced since the passed-in `proposal.proposal_revision`, an `ABORTED` error message will be returned. Only the buyer-modifiable fields of the proposal will be updated. Note that the deals in the proposal will be updated to match the passed-in copy. If a passed-in deal does not have a `deal_id`, the server will assign a new unique ID and create the deal. If passed-in deal has a `deal_id`, it will be updated to match the passed-in copy. Any existing deals not present in the passed-in proposal will be deleted. It is an error to pass in a deal with a `deal_id` not present at head.
    **/
    public openapisdk.models.operations.Adexchangebuyer2AccountsProposalsUpdateResponse adexchangebuyer2AccountsProposalsUpdate(openapisdk.models.operations.Adexchangebuyer2AccountsProposalsUpdateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta1/accounts/{accountId}/proposals/{proposalId}", request.pathParams);
        
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

        openapisdk.models.operations.Adexchangebuyer2AccountsProposalsUpdateResponse res = new openapisdk.models.operations.Adexchangebuyer2AccountsProposalsUpdateResponse() {{
            proposal = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Proposal out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Proposal.class);
                res.proposal = out;
            }
        }

        return res;
    }
	
	
    /**
     * adexchangebuyer2AccountsPublisherProfilesGet - Gets the requested publisher profile by id.
    **/
    public openapisdk.models.operations.Adexchangebuyer2AccountsPublisherProfilesGetResponse adexchangebuyer2AccountsPublisherProfilesGet(openapisdk.models.operations.Adexchangebuyer2AccountsPublisherProfilesGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta1/accounts/{accountId}/publisherProfiles/{publisherProfileId}", request.pathParams);
        
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

        openapisdk.models.operations.Adexchangebuyer2AccountsPublisherProfilesGetResponse res = new openapisdk.models.operations.Adexchangebuyer2AccountsPublisherProfilesGetResponse() {{
            publisherProfile = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PublisherProfile out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PublisherProfile.class);
                res.publisherProfile = out;
            }
        }

        return res;
    }
	
	
    /**
     * adexchangebuyer2AccountsPublisherProfilesList - List all publisher profiles visible to the buyer
    **/
    public openapisdk.models.operations.Adexchangebuyer2AccountsPublisherProfilesListResponse adexchangebuyer2AccountsPublisherProfilesList(openapisdk.models.operations.Adexchangebuyer2AccountsPublisherProfilesListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta1/accounts/{accountId}/publisherProfiles", request.pathParams);
        
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

        openapisdk.models.operations.Adexchangebuyer2AccountsPublisherProfilesListResponse res = new openapisdk.models.operations.Adexchangebuyer2AccountsPublisherProfilesListResponse() {{
            listPublisherProfilesResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListPublisherProfilesResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListPublisherProfilesResponse.class);
                res.listPublisherProfilesResponse = out;
            }
        }

        return res;
    }
	
}