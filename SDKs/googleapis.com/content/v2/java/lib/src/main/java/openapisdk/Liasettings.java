package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Liasettings {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Liasettings(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * contentLiasettingsCustombatch - Retrieves and/or updates the LIA settings of multiple accounts in a single request.
    **/
    public openapisdk.models.operations.ContentLiasettingsCustombatchResponse contentLiasettingsCustombatch(openapisdk.models.operations.ContentLiasettingsCustombatchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/liasettings/batch");
        
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

        openapisdk.models.operations.ContentLiasettingsCustombatchResponse res = new openapisdk.models.operations.ContentLiasettingsCustombatchResponse() {{
            liasettingsCustomBatchResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.LiasettingsCustomBatchResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.LiasettingsCustomBatchResponse.class);
                res.liasettingsCustomBatchResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * contentLiasettingsGet - Retrieves the LIA settings of the account.
    **/
    public openapisdk.models.operations.ContentLiasettingsGetResponse contentLiasettingsGet(openapisdk.models.operations.ContentLiasettingsGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{merchantId}/liasettings/{accountId}", request.pathParams);
        
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

        openapisdk.models.operations.ContentLiasettingsGetResponse res = new openapisdk.models.operations.ContentLiasettingsGetResponse() {{
            liaSettings = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.LiaSettings out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.LiaSettings.class);
                res.liaSettings = out;
            }
        }

        return res;
    }
	
	
    /**
     * contentLiasettingsGetaccessiblegmbaccounts - Retrieves the list of accessible Google My Business accounts.
    **/
    public openapisdk.models.operations.ContentLiasettingsGetaccessiblegmbaccountsResponse contentLiasettingsGetaccessiblegmbaccounts(openapisdk.models.operations.ContentLiasettingsGetaccessiblegmbaccountsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{merchantId}/liasettings/{accountId}/accessiblegmbaccounts", request.pathParams);
        
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

        openapisdk.models.operations.ContentLiasettingsGetaccessiblegmbaccountsResponse res = new openapisdk.models.operations.ContentLiasettingsGetaccessiblegmbaccountsResponse() {{
            liasettingsGetAccessibleGmbAccountsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.LiasettingsGetAccessibleGmbAccountsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.LiasettingsGetAccessibleGmbAccountsResponse.class);
                res.liasettingsGetAccessibleGmbAccountsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * contentLiasettingsList - Lists the LIA settings of the sub-accounts in your Merchant Center account.
    **/
    public openapisdk.models.operations.ContentLiasettingsListResponse contentLiasettingsList(openapisdk.models.operations.ContentLiasettingsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{merchantId}/liasettings", request.pathParams);
        
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

        openapisdk.models.operations.ContentLiasettingsListResponse res = new openapisdk.models.operations.ContentLiasettingsListResponse() {{
            liasettingsListResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.LiasettingsListResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.LiasettingsListResponse.class);
                res.liasettingsListResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * contentLiasettingsListposdataproviders - Retrieves the list of POS data providers that have active settings for the all eiligible countries.
    **/
    public openapisdk.models.operations.ContentLiasettingsListposdataprovidersResponse contentLiasettingsListposdataproviders(openapisdk.models.operations.ContentLiasettingsListposdataprovidersRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/liasettings/posdataproviders");
        
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

        openapisdk.models.operations.ContentLiasettingsListposdataprovidersResponse res = new openapisdk.models.operations.ContentLiasettingsListposdataprovidersResponse() {{
            liasettingsListPosDataProvidersResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.LiasettingsListPosDataProvidersResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.LiasettingsListPosDataProvidersResponse.class);
                res.liasettingsListPosDataProvidersResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * contentLiasettingsRequestgmbaccess - Requests access to a specified Google My Business account.
    **/
    public openapisdk.models.operations.ContentLiasettingsRequestgmbaccessResponse contentLiasettingsRequestgmbaccess(openapisdk.models.operations.ContentLiasettingsRequestgmbaccessRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{merchantId}/liasettings/{accountId}/requestgmbaccess", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
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

        openapisdk.models.operations.ContentLiasettingsRequestgmbaccessResponse res = new openapisdk.models.operations.ContentLiasettingsRequestgmbaccessResponse() {{
            liasettingsRequestGmbAccessResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.LiasettingsRequestGmbAccessResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.LiasettingsRequestGmbAccessResponse.class);
                res.liasettingsRequestGmbAccessResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * contentLiasettingsRequestinventoryverification - Requests inventory validation for the specified country.
    **/
    public openapisdk.models.operations.ContentLiasettingsRequestinventoryverificationResponse contentLiasettingsRequestinventoryverification(openapisdk.models.operations.ContentLiasettingsRequestinventoryverificationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{merchantId}/liasettings/{accountId}/requestinventoryverification/{country}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
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

        openapisdk.models.operations.ContentLiasettingsRequestinventoryverificationResponse res = new openapisdk.models.operations.ContentLiasettingsRequestinventoryverificationResponse() {{
            liasettingsRequestInventoryVerificationResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.LiasettingsRequestInventoryVerificationResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.LiasettingsRequestInventoryVerificationResponse.class);
                res.liasettingsRequestInventoryVerificationResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * contentLiasettingsSetinventoryverificationcontact - Sets the inventory verification contract for the specified country.
    **/
    public openapisdk.models.operations.ContentLiasettingsSetinventoryverificationcontactResponse contentLiasettingsSetinventoryverificationcontact(openapisdk.models.operations.ContentLiasettingsSetinventoryverificationcontactRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{merchantId}/liasettings/{accountId}/setinventoryverificationcontact", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
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

        openapisdk.models.operations.ContentLiasettingsSetinventoryverificationcontactResponse res = new openapisdk.models.operations.ContentLiasettingsSetinventoryverificationcontactResponse() {{
            liasettingsSetInventoryVerificationContactResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.LiasettingsSetInventoryVerificationContactResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.LiasettingsSetInventoryVerificationContactResponse.class);
                res.liasettingsSetInventoryVerificationContactResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * contentLiasettingsSetposdataprovider - Sets the POS data provider for the specified country.
    **/
    public openapisdk.models.operations.ContentLiasettingsSetposdataproviderResponse contentLiasettingsSetposdataprovider(openapisdk.models.operations.ContentLiasettingsSetposdataproviderRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{merchantId}/liasettings/{accountId}/setposdataprovider", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
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

        openapisdk.models.operations.ContentLiasettingsSetposdataproviderResponse res = new openapisdk.models.operations.ContentLiasettingsSetposdataproviderResponse() {{
            liasettingsSetPosDataProviderResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.LiasettingsSetPosDataProviderResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.LiasettingsSetPosDataProviderResponse.class);
                res.liasettingsSetPosDataProviderResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * contentLiasettingsUpdate - Updates the LIA settings of the account. Any fields that are not provided are deleted from the resource.
    **/
    public openapisdk.models.operations.ContentLiasettingsUpdateResponse contentLiasettingsUpdate(openapisdk.models.operations.ContentLiasettingsUpdateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{merchantId}/liasettings/{accountId}", request.pathParams);
        
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

        openapisdk.models.operations.ContentLiasettingsUpdateResponse res = new openapisdk.models.operations.ContentLiasettingsUpdateResponse() {{
            liaSettings = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.LiaSettings out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.LiaSettings.class);
                res.liaSettings = out;
            }
        }

        return res;
    }
	
}