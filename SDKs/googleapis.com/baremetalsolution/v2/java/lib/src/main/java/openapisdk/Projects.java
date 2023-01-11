package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Projects {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Projects(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * baremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetch - Get instance provisioning settings for a given project. This is hidden method used by UI only.
    **/
    public openapisdk.models.operations.BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchResponse baremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetch(openapisdk.models.operations.BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/{location}/instanceProvisioningSettings:fetch", request.pathParams);
        
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

        openapisdk.models.operations.BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchResponse res = new openapisdk.models.operations.BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchResponse() {{
            fetchInstanceProvisioningSettingsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.FetchInstanceProvisioningSettingsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.FetchInstanceProvisioningSettingsResponse.class);
                res.fetchInstanceProvisioningSettingsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * baremetalsolutionProjectsLocationsInstancesCreate - Create an Instance.
    **/
    public openapisdk.models.operations.BaremetalsolutionProjectsLocationsInstancesCreateResponse baremetalsolutionProjectsLocationsInstancesCreate(openapisdk.models.operations.BaremetalsolutionProjectsLocationsInstancesCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/{parent}/instances", request.pathParams);
        
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

        openapisdk.models.operations.BaremetalsolutionProjectsLocationsInstancesCreateResponse res = new openapisdk.models.operations.BaremetalsolutionProjectsLocationsInstancesCreateResponse() {{
            operation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Operation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Operation.class);
                res.operation = out;
            }
        }

        return res;
    }
	
	
    /**
     * baremetalsolutionProjectsLocationsInstancesDetachLun - Detach LUN from Instance.
    **/
    public openapisdk.models.operations.BaremetalsolutionProjectsLocationsInstancesDetachLunResponse baremetalsolutionProjectsLocationsInstancesDetachLun(openapisdk.models.operations.BaremetalsolutionProjectsLocationsInstancesDetachLunRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/{instance}:detachLun", request.pathParams);
        
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

        openapisdk.models.operations.BaremetalsolutionProjectsLocationsInstancesDetachLunResponse res = new openapisdk.models.operations.BaremetalsolutionProjectsLocationsInstancesDetachLunResponse() {{
            operation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Operation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Operation.class);
                res.operation = out;
            }
        }

        return res;
    }
	
	
    /**
     * baremetalsolutionProjectsLocationsInstancesDisableInteractiveSerialConsole - Disable the interactive serial console feature on an instance.
    **/
    public openapisdk.models.operations.BaremetalsolutionProjectsLocationsInstancesDisableInteractiveSerialConsoleResponse baremetalsolutionProjectsLocationsInstancesDisableInteractiveSerialConsole(openapisdk.models.operations.BaremetalsolutionProjectsLocationsInstancesDisableInteractiveSerialConsoleRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/{name}:disableInteractiveSerialConsole", request.pathParams);
        
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

        openapisdk.models.operations.BaremetalsolutionProjectsLocationsInstancesDisableInteractiveSerialConsoleResponse res = new openapisdk.models.operations.BaremetalsolutionProjectsLocationsInstancesDisableInteractiveSerialConsoleResponse() {{
            operation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Operation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Operation.class);
                res.operation = out;
            }
        }

        return res;
    }
	
	
    /**
     * baremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsole - Enable the interactive serial console feature on an instance.
    **/
    public openapisdk.models.operations.BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleResponse baremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsole(openapisdk.models.operations.BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/{name}:enableInteractiveSerialConsole", request.pathParams);
        
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

        openapisdk.models.operations.BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleResponse res = new openapisdk.models.operations.BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleResponse() {{
            operation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Operation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Operation.class);
                res.operation = out;
            }
        }

        return res;
    }
	
	
    /**
     * baremetalsolutionProjectsLocationsInstancesList - List servers in a given project and location.
    **/
    public openapisdk.models.operations.BaremetalsolutionProjectsLocationsInstancesListResponse baremetalsolutionProjectsLocationsInstancesList(openapisdk.models.operations.BaremetalsolutionProjectsLocationsInstancesListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/{parent}/instances", request.pathParams);
        
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

        openapisdk.models.operations.BaremetalsolutionProjectsLocationsInstancesListResponse res = new openapisdk.models.operations.BaremetalsolutionProjectsLocationsInstancesListResponse() {{
            listInstancesResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListInstancesResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListInstancesResponse.class);
                res.listInstancesResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * baremetalsolutionProjectsLocationsInstancesReset - Perform an ungraceful, hard reset on a server. Equivalent to shutting the power off and then turning it back on.
    **/
    public openapisdk.models.operations.BaremetalsolutionProjectsLocationsInstancesResetResponse baremetalsolutionProjectsLocationsInstancesReset(openapisdk.models.operations.BaremetalsolutionProjectsLocationsInstancesResetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/{name}:reset", request.pathParams);
        
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

        openapisdk.models.operations.BaremetalsolutionProjectsLocationsInstancesResetResponse res = new openapisdk.models.operations.BaremetalsolutionProjectsLocationsInstancesResetResponse() {{
            operation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Operation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Operation.class);
                res.operation = out;
            }
        }

        return res;
    }
	
	
    /**
     * baremetalsolutionProjectsLocationsInstancesStart - Starts a server that was shutdown.
    **/
    public openapisdk.models.operations.BaremetalsolutionProjectsLocationsInstancesStartResponse baremetalsolutionProjectsLocationsInstancesStart(openapisdk.models.operations.BaremetalsolutionProjectsLocationsInstancesStartRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/{name}:start", request.pathParams);
        
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

        openapisdk.models.operations.BaremetalsolutionProjectsLocationsInstancesStartResponse res = new openapisdk.models.operations.BaremetalsolutionProjectsLocationsInstancesStartResponse() {{
            operation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Operation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Operation.class);
                res.operation = out;
            }
        }

        return res;
    }
	
	
    /**
     * baremetalsolutionProjectsLocationsInstancesStop - Stop a running server.
    **/
    public openapisdk.models.operations.BaremetalsolutionProjectsLocationsInstancesStopResponse baremetalsolutionProjectsLocationsInstancesStop(openapisdk.models.operations.BaremetalsolutionProjectsLocationsInstancesStopRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/{name}:stop", request.pathParams);
        
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

        openapisdk.models.operations.BaremetalsolutionProjectsLocationsInstancesStopResponse res = new openapisdk.models.operations.BaremetalsolutionProjectsLocationsInstancesStopResponse() {{
            operation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Operation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Operation.class);
                res.operation = out;
            }
        }

        return res;
    }
	
	
    /**
     * baremetalsolutionProjectsLocationsList - Lists information about the supported locations for this service.
    **/
    public openapisdk.models.operations.BaremetalsolutionProjectsLocationsListResponse baremetalsolutionProjectsLocationsList(openapisdk.models.operations.BaremetalsolutionProjectsLocationsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/{name}/locations", request.pathParams);
        
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

        openapisdk.models.operations.BaremetalsolutionProjectsLocationsListResponse res = new openapisdk.models.operations.BaremetalsolutionProjectsLocationsListResponse() {{
            listLocationsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListLocationsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListLocationsResponse.class);
                res.listLocationsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * baremetalsolutionProjectsLocationsNetworksList - List network in a given project and location.
    **/
    public openapisdk.models.operations.BaremetalsolutionProjectsLocationsNetworksListResponse baremetalsolutionProjectsLocationsNetworksList(openapisdk.models.operations.BaremetalsolutionProjectsLocationsNetworksListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/{parent}/networks", request.pathParams);
        
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

        openapisdk.models.operations.BaremetalsolutionProjectsLocationsNetworksListResponse res = new openapisdk.models.operations.BaremetalsolutionProjectsLocationsNetworksListResponse() {{
            listNetworksResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListNetworksResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListNetworksResponse.class);
                res.listNetworksResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * baremetalsolutionProjectsLocationsNetworksListNetworkUsage - List all Networks (and used IPs for each Network) in the vendor account associated with the specified project.
    **/
    public openapisdk.models.operations.BaremetalsolutionProjectsLocationsNetworksListNetworkUsageResponse baremetalsolutionProjectsLocationsNetworksListNetworkUsage(openapisdk.models.operations.BaremetalsolutionProjectsLocationsNetworksListNetworkUsageRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/{location}/networks:listNetworkUsage", request.pathParams);
        
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

        openapisdk.models.operations.BaremetalsolutionProjectsLocationsNetworksListNetworkUsageResponse res = new openapisdk.models.operations.BaremetalsolutionProjectsLocationsNetworksListNetworkUsageResponse() {{
            listNetworkUsageResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListNetworkUsageResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListNetworkUsageResponse.class);
                res.listNetworkUsageResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * baremetalsolutionProjectsLocationsNfsSharesCreate - Create an NFS share.
    **/
    public openapisdk.models.operations.BaremetalsolutionProjectsLocationsNfsSharesCreateResponse baremetalsolutionProjectsLocationsNfsSharesCreate(openapisdk.models.operations.BaremetalsolutionProjectsLocationsNfsSharesCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/{parent}/nfsShares", request.pathParams);
        
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

        openapisdk.models.operations.BaremetalsolutionProjectsLocationsNfsSharesCreateResponse res = new openapisdk.models.operations.BaremetalsolutionProjectsLocationsNfsSharesCreateResponse() {{
            operation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Operation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Operation.class);
                res.operation = out;
            }
        }

        return res;
    }
	
	
    /**
     * baremetalsolutionProjectsLocationsNfsSharesList - List NFS shares.
    **/
    public openapisdk.models.operations.BaremetalsolutionProjectsLocationsNfsSharesListResponse baremetalsolutionProjectsLocationsNfsSharesList(openapisdk.models.operations.BaremetalsolutionProjectsLocationsNfsSharesListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/{parent}/nfsShares", request.pathParams);
        
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

        openapisdk.models.operations.BaremetalsolutionProjectsLocationsNfsSharesListResponse res = new openapisdk.models.operations.BaremetalsolutionProjectsLocationsNfsSharesListResponse() {{
            listNfsSharesResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListNfsSharesResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListNfsSharesResponse.class);
                res.listNfsSharesResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * baremetalsolutionProjectsLocationsProvisioningConfigsCreate - Create new ProvisioningConfig.
    **/
    public openapisdk.models.operations.BaremetalsolutionProjectsLocationsProvisioningConfigsCreateResponse baremetalsolutionProjectsLocationsProvisioningConfigsCreate(openapisdk.models.operations.BaremetalsolutionProjectsLocationsProvisioningConfigsCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/{parent}/provisioningConfigs", request.pathParams);
        
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

        openapisdk.models.operations.BaremetalsolutionProjectsLocationsProvisioningConfigsCreateResponse res = new openapisdk.models.operations.BaremetalsolutionProjectsLocationsProvisioningConfigsCreateResponse() {{
            provisioningConfig = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ProvisioningConfig out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ProvisioningConfig.class);
                res.provisioningConfig = out;
            }
        }

        return res;
    }
	
	
    /**
     * baremetalsolutionProjectsLocationsProvisioningConfigsSubmit - Submit a provisiong configuration for a given project.
    **/
    public openapisdk.models.operations.BaremetalsolutionProjectsLocationsProvisioningConfigsSubmitResponse baremetalsolutionProjectsLocationsProvisioningConfigsSubmit(openapisdk.models.operations.BaremetalsolutionProjectsLocationsProvisioningConfigsSubmitRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/{parent}/provisioningConfigs:submit", request.pathParams);
        
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

        openapisdk.models.operations.BaremetalsolutionProjectsLocationsProvisioningConfigsSubmitResponse res = new openapisdk.models.operations.BaremetalsolutionProjectsLocationsProvisioningConfigsSubmitResponse() {{
            submitProvisioningConfigResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SubmitProvisioningConfigResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SubmitProvisioningConfigResponse.class);
                res.submitProvisioningConfigResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * baremetalsolutionProjectsLocationsProvisioningQuotasList - List the budget details to provision resources on a given project.
    **/
    public openapisdk.models.operations.BaremetalsolutionProjectsLocationsProvisioningQuotasListResponse baremetalsolutionProjectsLocationsProvisioningQuotasList(openapisdk.models.operations.BaremetalsolutionProjectsLocationsProvisioningQuotasListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/{parent}/provisioningQuotas", request.pathParams);
        
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

        openapisdk.models.operations.BaremetalsolutionProjectsLocationsProvisioningQuotasListResponse res = new openapisdk.models.operations.BaremetalsolutionProjectsLocationsProvisioningQuotasListResponse() {{
            listProvisioningQuotasResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListProvisioningQuotasResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListProvisioningQuotasResponse.class);
                res.listProvisioningQuotasResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * baremetalsolutionProjectsLocationsSshKeysCreate - Register a public SSH key in the specified project for use with the interactive serial console feature.
    **/
    public openapisdk.models.operations.BaremetalsolutionProjectsLocationsSshKeysCreateResponse baremetalsolutionProjectsLocationsSshKeysCreate(openapisdk.models.operations.BaremetalsolutionProjectsLocationsSshKeysCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/{parent}/sshKeys", request.pathParams);
        
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

        openapisdk.models.operations.BaremetalsolutionProjectsLocationsSshKeysCreateResponse res = new openapisdk.models.operations.BaremetalsolutionProjectsLocationsSshKeysCreateResponse() {{
            sshKey = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SshKey out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SshKey.class);
                res.sshKey = out;
            }
        }

        return res;
    }
	
	
    /**
     * baremetalsolutionProjectsLocationsSshKeysList - Lists the public SSH keys registered for the specified project. These SSH keys are used only for the interactive serial console feature.
    **/
    public openapisdk.models.operations.BaremetalsolutionProjectsLocationsSshKeysListResponse baremetalsolutionProjectsLocationsSshKeysList(openapisdk.models.operations.BaremetalsolutionProjectsLocationsSshKeysListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/{parent}/sshKeys", request.pathParams);
        
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

        openapisdk.models.operations.BaremetalsolutionProjectsLocationsSshKeysListResponse res = new openapisdk.models.operations.BaremetalsolutionProjectsLocationsSshKeysListResponse() {{
            listSSHKeysResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListSshKeysResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListSshKeysResponse.class);
                res.listSSHKeysResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * baremetalsolutionProjectsLocationsVolumesList - List storage volumes in a given project and location.
    **/
    public openapisdk.models.operations.BaremetalsolutionProjectsLocationsVolumesListResponse baremetalsolutionProjectsLocationsVolumesList(openapisdk.models.operations.BaremetalsolutionProjectsLocationsVolumesListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/{parent}/volumes", request.pathParams);
        
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

        openapisdk.models.operations.BaremetalsolutionProjectsLocationsVolumesListResponse res = new openapisdk.models.operations.BaremetalsolutionProjectsLocationsVolumesListResponse() {{
            listVolumesResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListVolumesResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListVolumesResponse.class);
                res.listVolumesResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * baremetalsolutionProjectsLocationsVolumesLunsList - List storage volume luns for given storage volume.
    **/
    public openapisdk.models.operations.BaremetalsolutionProjectsLocationsVolumesLunsListResponse baremetalsolutionProjectsLocationsVolumesLunsList(openapisdk.models.operations.BaremetalsolutionProjectsLocationsVolumesLunsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/{parent}/luns", request.pathParams);
        
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

        openapisdk.models.operations.BaremetalsolutionProjectsLocationsVolumesLunsListResponse res = new openapisdk.models.operations.BaremetalsolutionProjectsLocationsVolumesLunsListResponse() {{
            listLunsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListLunsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListLunsResponse.class);
                res.listLunsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * baremetalsolutionProjectsLocationsVolumesPatch - Update details of a single storage volume.
    **/
    public openapisdk.models.operations.BaremetalsolutionProjectsLocationsVolumesPatchResponse baremetalsolutionProjectsLocationsVolumesPatch(openapisdk.models.operations.BaremetalsolutionProjectsLocationsVolumesPatchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/{name}", request.pathParams);
        
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

        openapisdk.models.operations.BaremetalsolutionProjectsLocationsVolumesPatchResponse res = new openapisdk.models.operations.BaremetalsolutionProjectsLocationsVolumesPatchResponse() {{
            operation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Operation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Operation.class);
                res.operation = out;
            }
        }

        return res;
    }
	
	
    /**
     * baremetalsolutionProjectsLocationsVolumesResize - Emergency Volume resize.
    **/
    public openapisdk.models.operations.BaremetalsolutionProjectsLocationsVolumesResizeResponse baremetalsolutionProjectsLocationsVolumesResize(openapisdk.models.operations.BaremetalsolutionProjectsLocationsVolumesResizeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/{volume}:resize", request.pathParams);
        
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

        openapisdk.models.operations.BaremetalsolutionProjectsLocationsVolumesResizeResponse res = new openapisdk.models.operations.BaremetalsolutionProjectsLocationsVolumesResizeResponse() {{
            operation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Operation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Operation.class);
                res.operation = out;
            }
        }

        return res;
    }
	
	
    /**
     * baremetalsolutionProjectsLocationsVolumesSnapshotsCreate - Takes a snapshot of a boot volume. Returns INVALID_ARGUMENT if called for a non-boot volume.
    **/
    public openapisdk.models.operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsCreateResponse baremetalsolutionProjectsLocationsVolumesSnapshotsCreate(openapisdk.models.operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/{parent}/snapshots", request.pathParams);
        
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

        openapisdk.models.operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsCreateResponse res = new openapisdk.models.operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsCreateResponse() {{
            volumeSnapshot = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VolumeSnapshot out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VolumeSnapshot.class);
                res.volumeSnapshot = out;
            }
        }

        return res;
    }
	
	
    /**
     * baremetalsolutionProjectsLocationsVolumesSnapshotsDelete - Deletes a volume snapshot. Returns INVALID_ARGUMENT if called for a non-boot volume.
    **/
    public openapisdk.models.operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteResponse baremetalsolutionProjectsLocationsVolumesSnapshotsDelete(openapisdk.models.operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/{name}", request.pathParams);
        
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

        openapisdk.models.operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteResponse res = new openapisdk.models.operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteResponse() {{
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
     * baremetalsolutionProjectsLocationsVolumesSnapshotsGet - Returns the specified snapshot resource. Returns INVALID_ARGUMENT if called for a non-boot volume.
    **/
    public openapisdk.models.operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsGetResponse baremetalsolutionProjectsLocationsVolumesSnapshotsGet(openapisdk.models.operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/{name}", request.pathParams);
        
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

        openapisdk.models.operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsGetResponse res = new openapisdk.models.operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsGetResponse() {{
            volumeSnapshot = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VolumeSnapshot out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VolumeSnapshot.class);
                res.volumeSnapshot = out;
            }
        }

        return res;
    }
	
	
    /**
     * baremetalsolutionProjectsLocationsVolumesSnapshotsList - Retrieves the list of snapshots for the specified volume. Returns a response with an empty list of snapshots if called for a non-boot volume.
    **/
    public openapisdk.models.operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsListResponse baremetalsolutionProjectsLocationsVolumesSnapshotsList(openapisdk.models.operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/{parent}/snapshots", request.pathParams);
        
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

        openapisdk.models.operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsListResponse res = new openapisdk.models.operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsListResponse() {{
            listVolumeSnapshotsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListVolumeSnapshotsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListVolumeSnapshotsResponse.class);
                res.listVolumeSnapshotsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * baremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshot - Uses the specified snapshot to restore its parent volume. Returns INVALID_ARGUMENT if called for a non-boot volume.
    **/
    public openapisdk.models.operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotResponse baremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshot(openapisdk.models.operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/{volumeSnapshot}:restoreVolumeSnapshot", request.pathParams);
        
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

        openapisdk.models.operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotResponse res = new openapisdk.models.operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotResponse() {{
            operation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Operation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Operation.class);
                res.operation = out;
            }
        }

        return res;
    }
	
}