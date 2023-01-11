package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Buyers {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Buyers(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * authorizedbuyersmarketplaceBuyersAuctionPackagesList - List the auction packages subscribed by a buyer and its clients.
    **/
    public openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesListResponse authorizedbuyersmarketplaceBuyersAuctionPackagesList(openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{parent}/auctionPackages", request.pathParams);
        
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

        openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesListResponse res = new openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesListResponse() {{
            listAuctionPackagesResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListAuctionPackagesResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListAuctionPackagesResponse.class);
                res.listAuctionPackagesResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * authorizedbuyersmarketplaceBuyersAuctionPackagesSubscribe - Subscribe to the auction package for the specified buyer. Once subscribed, the bidder will receive a call out for inventory matching the auction package targeting criteria with the auction package deal ID and the specified buyer.
    **/
    public openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeResponse authorizedbuyersmarketplaceBuyersAuctionPackagesSubscribe(openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{name}:subscribe", request.pathParams);
        
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

        openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeResponse res = new openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeResponse() {{
            auctionPackage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AuctionPackage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AuctionPackage.class);
                res.auctionPackage = out;
            }
        }

        return res;
    }
	
	
    /**
     * authorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClients - Subscribe the specified clients of the buyer to the auction package. If a client in the list does not belong to the buyer, an error response will be returned, and all of the following clients in the list will not be subscribed. Subscribing an already subscribed client will have no effect.
    **/
    public openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClientsResponse authorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClients(openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClientsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{auctionPackage}:subscribeClients", request.pathParams);
        
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

        openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClientsResponse res = new openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClientsResponse() {{
            auctionPackage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AuctionPackage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AuctionPackage.class);
                res.auctionPackage = out;
            }
        }

        return res;
    }
	
	
    /**
     * authorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribe - Unsubscribe from the auction package for the specified buyer. Once unsubscribed, the bidder will no longer receive a call out for the auction package deal ID and the specified buyer.
    **/
    public openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeResponse authorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribe(openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{name}:unsubscribe", request.pathParams);
        
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

        openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeResponse res = new openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeResponse() {{
            auctionPackage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AuctionPackage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AuctionPackage.class);
                res.auctionPackage = out;
            }
        }

        return res;
    }
	
	
    /**
     * authorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClients - Unsubscribe from the auction package for the specified clients of the buyer. Unsubscribing a client that is not subscribed will have no effect.
    **/
    public openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsResponse authorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClients(openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{auctionPackage}:unsubscribeClients", request.pathParams);
        
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

        openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsResponse res = new openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsResponse() {{
            auctionPackage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AuctionPackage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AuctionPackage.class);
                res.auctionPackage = out;
            }
        }

        return res;
    }
	
	
    /**
     * authorizedbuyersmarketplaceBuyersClientsCreate - Creates a new client.
    **/
    public openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersClientsCreateResponse authorizedbuyersmarketplaceBuyersClientsCreate(openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersClientsCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{parent}/clients", request.pathParams);
        
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

        openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersClientsCreateResponse res = new openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersClientsCreateResponse() {{
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
     * authorizedbuyersmarketplaceBuyersClientsList - Lists all the clients for the current buyer.
    **/
    public openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersClientsListResponse authorizedbuyersmarketplaceBuyersClientsList(openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersClientsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{parent}/clients", request.pathParams);
        
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

        openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersClientsListResponse res = new openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersClientsListResponse() {{
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
     * authorizedbuyersmarketplaceBuyersClientsUsersActivate - Activates an existing client user. The state of the client user will be updated from "INACTIVE" to "ACTIVE". This method has no effect if the client user is already in "ACTIVE" state. An error will be returned if the client user to activate is still in "INVITED" state.
    **/
    public openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersClientsUsersActivateResponse authorizedbuyersmarketplaceBuyersClientsUsersActivate(openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersClientsUsersActivateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{name}:activate", request.pathParams);
        
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

        openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersClientsUsersActivateResponse res = new openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersClientsUsersActivateResponse() {{
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
     * authorizedbuyersmarketplaceBuyersClientsUsersCreate - Creates a new client user in "INVITED" state. An email invitation will be sent to the new user, once accepted the user will become active.
    **/
    public openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersClientsUsersCreateResponse authorizedbuyersmarketplaceBuyersClientsUsersCreate(openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersClientsUsersCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{parent}/users", request.pathParams);
        
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

        openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersClientsUsersCreateResponse res = new openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersClientsUsersCreateResponse() {{
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
     * authorizedbuyersmarketplaceBuyersClientsUsersDeactivate - Deactivates an existing client user. The state of the client user will be updated from "ACTIVE" to "INACTIVE". This method has no effect if the client user is already in "INACTIVE" state. An error will be returned if the client user to deactivate is still in "INVITED" state.
    **/
    public openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateResponse authorizedbuyersmarketplaceBuyersClientsUsersDeactivate(openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{name}:deactivate", request.pathParams);
        
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

        openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateResponse res = new openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateResponse() {{
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
     * authorizedbuyersmarketplaceBuyersClientsUsersDelete - Deletes an existing client user. The client user will lose access to the Authorized Buyers UI. Note that if a client user is deleted, the user's access to the UI can't be restored unless a new client user is created and activated.
    **/
    public openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteResponse authorizedbuyersmarketplaceBuyersClientsUsersDelete(openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{name}", request.pathParams);
        
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

        openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteResponse res = new openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteResponse() {{
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
     * authorizedbuyersmarketplaceBuyersClientsUsersList - Lists all client users for a specified client.
    **/
    public openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersClientsUsersListResponse authorizedbuyersmarketplaceBuyersClientsUsersList(openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersClientsUsersListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{parent}/users", request.pathParams);
        
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

        openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersClientsUsersListResponse res = new openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersClientsUsersListResponse() {{
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
     * authorizedbuyersmarketplaceBuyersFinalizedDealsAddCreative - Add creative to be used in the bidding process for a finalized deal. For programmatic guaranteed deals, it's recommended that you associate at least one approved creative with the deal before calling SetReadyToServe, to help reduce the number of bid responses filtered because they don't contain approved creatives. Creatives successfully added to a deal can be found in the Realtime-bidding Creatives API creative.deal_ids. This method only applies to programmatic guaranteed deals. Maximum number of 1000 creatives can be added to a finalized deal.
    **/
    public openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeResponse authorizedbuyersmarketplaceBuyersFinalizedDealsAddCreative(openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{deal}:addCreative", request.pathParams);
        
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

        openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeResponse res = new openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeResponse() {{
            finalizedDeal = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.FinalizedDeal out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.FinalizedDeal.class);
                res.finalizedDeal = out;
            }
        }

        return res;
    }
	
	
    /**
     * authorizedbuyersmarketplaceBuyersFinalizedDealsList - Lists finalized deals. Use the URL path "/v1/buyers/{accountId}/finalizedDeals" to list finalized deals for the current buyer and its clients. Bidders can use the URL path "/v1/bidders/{accountId}/finalizedDeals" to list finalized deals for the bidder, its buyers and all their clients.
    **/
    public openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsListResponse authorizedbuyersmarketplaceBuyersFinalizedDealsList(openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{parent}/finalizedDeals", request.pathParams);
        
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

        openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsListResponse res = new openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsListResponse() {{
            listFinalizedDealsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListFinalizedDealsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListFinalizedDealsResponse.class);
                res.listFinalizedDealsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * authorizedbuyersmarketplaceBuyersFinalizedDealsPause - Pauses serving of the given finalized deal. This call only pauses the serving status, and does not affect other fields of the finalized deal. Calling this method for an already paused deal has no effect. This method only applies to programmatic guaranteed deals.
    **/
    public openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsPauseResponse authorizedbuyersmarketplaceBuyersFinalizedDealsPause(openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsPauseRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{name}:pause", request.pathParams);
        
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

        openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsPauseResponse res = new openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsPauseResponse() {{
            finalizedDeal = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.FinalizedDeal out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.FinalizedDeal.class);
                res.finalizedDeal = out;
            }
        }

        return res;
    }
	
	
    /**
     * authorizedbuyersmarketplaceBuyersFinalizedDealsResume - Resumes serving of the given finalized deal. Calling this method for an running deal has no effect. If a deal is initially paused by the seller, calling this method will not resume serving of the deal until the seller also resumes the deal. This method only applies to programmatic guaranteed deals.
    **/
    public openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsResumeResponse authorizedbuyersmarketplaceBuyersFinalizedDealsResume(openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsResumeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{name}:resume", request.pathParams);
        
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

        openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsResumeResponse res = new openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsResumeResponse() {{
            finalizedDeal = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.FinalizedDeal out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.FinalizedDeal.class);
                res.finalizedDeal = out;
            }
        }

        return res;
    }
	
	
    /**
     * authorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServe - Sets the given finalized deal as ready to serve. By default, deals are set as ready to serve as soon as they're finalized. If you want to opt out of the default behavior, and manually indicate that deals are ready to serve, ask your Technical Account Manager to add you to the allowlist. If you choose to use this method, finalized deals belonging to the bidder and its child seats don't start serving until after you call `setReadyToServe`, and after the deals become active. For example, you can use this method to delay receiving bid requests until your creative is ready. This method only applies to programmatic guaranteed deals.
    **/
    public openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeResponse authorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServe(openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{deal}:setReadyToServe", request.pathParams);
        
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

        openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeResponse res = new openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeResponse() {{
            finalizedDeal = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.FinalizedDeal out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.FinalizedDeal.class);
                res.finalizedDeal = out;
            }
        }

        return res;
    }
	
	
    /**
     * authorizedbuyersmarketplaceBuyersProposalsAccept - Accepts the proposal at the given revision number. If the revision number in the request is behind the latest from the server, an error message will be returned. This call updates the Proposal.state from `BUYER_ACCEPTANCE_REQUESTED` to `FINALIZED`; it has no side effect if the Proposal.state is already `FINALIZED` and throws exception if the Proposal.state is not either `BUYER_ACCEPTANCE_REQUESTED` or `FINALIZED`. Accepting a proposal means the buyer understands and accepts the Proposal.terms_and_conditions proposed by the seller.
    **/
    public openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersProposalsAcceptResponse authorizedbuyersmarketplaceBuyersProposalsAccept(openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersProposalsAcceptRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{name}:accept", request.pathParams);
        
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

        openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersProposalsAcceptResponse res = new openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersProposalsAcceptResponse() {{
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
     * authorizedbuyersmarketplaceBuyersProposalsAddNote - Creates a note for this proposal and sends to the seller.
    **/
    public openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersProposalsAddNoteResponse authorizedbuyersmarketplaceBuyersProposalsAddNote(openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersProposalsAddNoteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{proposal}:addNote", request.pathParams);
        
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

        openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersProposalsAddNoteResponse res = new openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersProposalsAddNoteResponse() {{
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
     * authorizedbuyersmarketplaceBuyersProposalsCancelNegotiation - Cancels an ongoing negotiation on a proposal. This does not cancel or end serving for the deals if the proposal has been finalized. If the proposal has not been finalized before, calling this method will set the Proposal.state to `TERMINATED` and increment the Proposal.proposal_revision. If the proposal has been finalized before and is under renegotiation now, calling this method will reset the Proposal.state to `FINALIZED` and increment the Proposal.proposal_revision. This method does not support private auction proposals whose Proposal.deal_type is 'PRIVATE_AUCTION'.
    **/
    public openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiationResponse authorizedbuyersmarketplaceBuyersProposalsCancelNegotiation(openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{proposal}:cancelNegotiation", request.pathParams);
        
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

        openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiationResponse res = new openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiationResponse() {{
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
     * authorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdate - Batch updates multiple deals in the same proposal.
    **/
    public openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateResponse authorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdate(openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{parent}/deals:batchUpdate", request.pathParams);
        
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

        openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateResponse res = new openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateResponse() {{
            batchUpdateDealsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BatchUpdateDealsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BatchUpdateDealsResponse.class);
                res.batchUpdateDealsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * authorizedbuyersmarketplaceBuyersProposalsDealsList - Lists all deals in a proposal. To retrieve only the finalized revision deals regardless if a deal is being renegotiated, see the FinalizedDeals resource.
    **/
    public openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersProposalsDealsListResponse authorizedbuyersmarketplaceBuyersProposalsDealsList(openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersProposalsDealsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{parent}/deals", request.pathParams);
        
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

        openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersProposalsDealsListResponse res = new openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersProposalsDealsListResponse() {{
            listDealsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListDealsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListDealsResponse.class);
                res.listDealsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * authorizedbuyersmarketplaceBuyersProposalsDealsPatch - Updates the given deal at the buyer known revision number. If the server revision has advanced since the passed-in proposal.proposal_revision an ABORTED error message will be returned. The revision number is incremented by the server whenever the proposal or its constituent deals are updated. Note: The revision number is kept at a proposal level. The buyer of the API is expected to keep track of the revision number after the last update operation and send it in as part of the next update request. This way, if there are further changes on the server (for example, seller making new updates), then the server can detect conflicts and reject the proposed changes.
    **/
    public openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchResponse authorizedbuyersmarketplaceBuyersProposalsDealsPatch(openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{name}", request.pathParams);
        
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

        openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchResponse res = new openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchResponse() {{
            deal = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Deal out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Deal.class);
                res.deal = out;
            }
        }

        return res;
    }
	
	
    /**
     * authorizedbuyersmarketplaceBuyersProposalsList - Lists proposals. A filter expression (list filter syntax) may be specified to filter the results. This will not list finalized versions of proposals that are being renegotiated; to retrieve these use the finalizedProposals resource.
    **/
    public openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersProposalsListResponse authorizedbuyersmarketplaceBuyersProposalsList(openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersProposalsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{parent}/proposals", request.pathParams);
        
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

        openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersProposalsListResponse res = new openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersProposalsListResponse() {{
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
     * authorizedbuyersmarketplaceBuyersProposalsSendRfp - Sends a request for proposal (RFP) to a publisher to initiate the negotiation regarding certain inventory. In the RFP, buyers can specify the deal type, deal terms, start and end dates, targeting, and a message to the publisher. Once the RFP is sent, a proposal in `SELLER_REVIEW_REQUESTED` state will be created and returned in the response. The publisher may review your request and respond with detailed deals in the proposal.
    **/
    public openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersProposalsSendRfpResponse authorizedbuyersmarketplaceBuyersProposalsSendRfp(openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersProposalsSendRfpRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{buyer}/proposals:sendRfp", request.pathParams);
        
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

        openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersProposalsSendRfpResponse res = new openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersProposalsSendRfpResponse() {{
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
     * authorizedbuyersmarketplaceBuyersPublisherProfilesGet - Gets the requested publisher profile by name.
    **/
    public openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetResponse authorizedbuyersmarketplaceBuyersPublisherProfilesGet(openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{name}", request.pathParams);
        
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

        openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetResponse res = new openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetResponse() {{
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
     * authorizedbuyersmarketplaceBuyersPublisherProfilesList - Lists publisher profiles. The returned publisher profiles aren't in any defined order. The order of the results might change. A new publisher profile can appear in any place in the list of returned results.
    **/
    public openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersPublisherProfilesListResponse authorizedbuyersmarketplaceBuyersPublisherProfilesList(openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersPublisherProfilesListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{parent}/publisherProfiles", request.pathParams);
        
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

        openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersPublisherProfilesListResponse res = new openapisdk.models.operations.AuthorizedbuyersmarketplaceBuyersPublisherProfilesListResponse() {{
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