package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class Customers {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Customers(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * chromemanagementCustomersAppsCountChromeAppRequests - Generate summary of app installation requests.
    **/
    public openapisdk.models.operations.ChromemanagementCustomersAppsCountChromeAppRequestsResponse chromemanagementCustomersAppsCountChromeAppRequests(openapisdk.models.operations.ChromemanagementCustomersAppsCountChromeAppRequestsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{customer}/apps:countChromeAppRequests", request.pathParams);
        
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

        openapisdk.models.operations.ChromemanagementCustomersAppsCountChromeAppRequestsResponse res = new openapisdk.models.operations.ChromemanagementCustomersAppsCountChromeAppRequestsResponse() {{
            googleChromeManagementV1CountChromeAppRequestsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleChromeManagementV1CountChromeAppRequestsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleChromeManagementV1CountChromeAppRequestsResponse.class);
                res.googleChromeManagementV1CountChromeAppRequestsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * chromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDate - Generate report of the number of devices expiring in each month of the selected time frame. Devices are grouped by auto update expiration date and model. Further information can be found [here](https://support.google.com/chrome/a/answer/10564947).
    **/
    public openapisdk.models.operations.ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateResponse chromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDate(openapisdk.models.operations.ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{customer}/reports:countChromeDevicesReachingAutoExpirationDate", request.pathParams);
        
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

        openapisdk.models.operations.ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateResponse res = new openapisdk.models.operations.ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateResponse() {{
            googleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse.class);
                res.googleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * chromemanagementCustomersReportsCountChromeDevicesThatNeedAttention - Counts of ChromeOS devices that have not synced policies or have lacked user activity in the past 28 days, are out of date, or are not complaint. Further information can be found here https://support.google.com/chrome/a/answer/10564947
    **/
    public openapisdk.models.operations.ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttentionResponse chromemanagementCustomersReportsCountChromeDevicesThatNeedAttention(openapisdk.models.operations.ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttentionRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{customer}/reports:countChromeDevicesThatNeedAttention", request.pathParams);
        
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

        openapisdk.models.operations.ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttentionResponse res = new openapisdk.models.operations.ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttentionResponse() {{
            googleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse.class);
                res.googleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * chromemanagementCustomersReportsCountChromeHardwareFleetDevices - Counts of devices with a specific hardware specification from the requested hardware type (for example model name, processor type). Further information can be found here https://support.google.com/chrome/a/answer/10564947
    **/
    public openapisdk.models.operations.ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesResponse chromemanagementCustomersReportsCountChromeHardwareFleetDevices(openapisdk.models.operations.ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{customer}/reports:countChromeHardwareFleetDevices", request.pathParams);
        
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

        openapisdk.models.operations.ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesResponse res = new openapisdk.models.operations.ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesResponse() {{
            googleChromeManagementV1CountChromeHardwareFleetDevicesResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse.class);
                res.googleChromeManagementV1CountChromeHardwareFleetDevicesResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * chromemanagementCustomersReportsCountChromeVersions - Generate report of installed Chrome versions.
    **/
    public openapisdk.models.operations.ChromemanagementCustomersReportsCountChromeVersionsResponse chromemanagementCustomersReportsCountChromeVersions(openapisdk.models.operations.ChromemanagementCustomersReportsCountChromeVersionsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{customer}/reports:countChromeVersions", request.pathParams);
        
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

        openapisdk.models.operations.ChromemanagementCustomersReportsCountChromeVersionsResponse res = new openapisdk.models.operations.ChromemanagementCustomersReportsCountChromeVersionsResponse() {{
            googleChromeManagementV1CountChromeVersionsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleChromeManagementV1CountChromeVersionsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleChromeManagementV1CountChromeVersionsResponse.class);
                res.googleChromeManagementV1CountChromeVersionsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * chromemanagementCustomersReportsCountInstalledApps - Generate report of app installations.
    **/
    public openapisdk.models.operations.ChromemanagementCustomersReportsCountInstalledAppsResponse chromemanagementCustomersReportsCountInstalledApps(openapisdk.models.operations.ChromemanagementCustomersReportsCountInstalledAppsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{customer}/reports:countInstalledApps", request.pathParams);
        
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

        openapisdk.models.operations.ChromemanagementCustomersReportsCountInstalledAppsResponse res = new openapisdk.models.operations.ChromemanagementCustomersReportsCountInstalledAppsResponse() {{
            googleChromeManagementV1CountInstalledAppsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleChromeManagementV1CountInstalledAppsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleChromeManagementV1CountInstalledAppsResponse.class);
                res.googleChromeManagementV1CountInstalledAppsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * chromemanagementCustomersReportsFindInstalledAppDevices - Generate report of devices that have a specified app installed.
    **/
    public openapisdk.models.operations.ChromemanagementCustomersReportsFindInstalledAppDevicesResponse chromemanagementCustomersReportsFindInstalledAppDevices(openapisdk.models.operations.ChromemanagementCustomersReportsFindInstalledAppDevicesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{customer}/reports:findInstalledAppDevices", request.pathParams);
        
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

        openapisdk.models.operations.ChromemanagementCustomersReportsFindInstalledAppDevicesResponse res = new openapisdk.models.operations.ChromemanagementCustomersReportsFindInstalledAppDevicesResponse() {{
            googleChromeManagementV1FindInstalledAppDevicesResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleChromeManagementV1FindInstalledAppDevicesResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleChromeManagementV1FindInstalledAppDevicesResponse.class);
                res.googleChromeManagementV1FindInstalledAppDevicesResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * chromemanagementCustomersTelemetryDevicesGet - Get telemetry device.
    **/
    public openapisdk.models.operations.ChromemanagementCustomersTelemetryDevicesGetResponse chromemanagementCustomersTelemetryDevicesGet(openapisdk.models.operations.ChromemanagementCustomersTelemetryDevicesGetRequest request) throws Exception {
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

        openapisdk.models.operations.ChromemanagementCustomersTelemetryDevicesGetResponse res = new openapisdk.models.operations.ChromemanagementCustomersTelemetryDevicesGetResponse() {{
            googleChromeManagementV1TelemetryDevice = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleChromeManagementV1TelemetryDevice out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleChromeManagementV1TelemetryDevice.class);
                res.googleChromeManagementV1TelemetryDevice = out;
            }
        }

        return res;
    }
	
	
    /**
     * chromemanagementCustomersTelemetryDevicesList - List all telemetry devices.
    **/
    public openapisdk.models.operations.ChromemanagementCustomersTelemetryDevicesListResponse chromemanagementCustomersTelemetryDevicesList(openapisdk.models.operations.ChromemanagementCustomersTelemetryDevicesListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{parent}/telemetry/devices", request.pathParams);
        
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

        openapisdk.models.operations.ChromemanagementCustomersTelemetryDevicesListResponse res = new openapisdk.models.operations.ChromemanagementCustomersTelemetryDevicesListResponse() {{
            googleChromeManagementV1ListTelemetryDevicesResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleChromeManagementV1ListTelemetryDevicesResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleChromeManagementV1ListTelemetryDevicesResponse.class);
                res.googleChromeManagementV1ListTelemetryDevicesResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * chromemanagementCustomersTelemetryEventsList - List telemetry events.
    **/
    public openapisdk.models.operations.ChromemanagementCustomersTelemetryEventsListResponse chromemanagementCustomersTelemetryEventsList(openapisdk.models.operations.ChromemanagementCustomersTelemetryEventsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{parent}/telemetry/events", request.pathParams);
        
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

        openapisdk.models.operations.ChromemanagementCustomersTelemetryEventsListResponse res = new openapisdk.models.operations.ChromemanagementCustomersTelemetryEventsListResponse() {{
            googleChromeManagementV1ListTelemetryEventsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleChromeManagementV1ListTelemetryEventsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleChromeManagementV1ListTelemetryEventsResponse.class);
                res.googleChromeManagementV1ListTelemetryEventsResponse = out;
            }
        }

        return res;
    }
	
}