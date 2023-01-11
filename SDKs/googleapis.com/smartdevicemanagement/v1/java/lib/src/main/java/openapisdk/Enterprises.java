package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Enterprises {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Enterprises(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * smartdevicemanagementEnterprisesDevicesExecuteCommand - Executes a command to device managed by the enterprise.
    **/
    public openapisdk.models.operations.SmartdevicemanagementEnterprisesDevicesExecuteCommandResponse smartdevicemanagementEnterprisesDevicesExecuteCommand(openapisdk.models.operations.SmartdevicemanagementEnterprisesDevicesExecuteCommandRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{name}:executeCommand", request.pathParams);
        
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

        openapisdk.models.operations.SmartdevicemanagementEnterprisesDevicesExecuteCommandResponse res = new openapisdk.models.operations.SmartdevicemanagementEnterprisesDevicesExecuteCommandResponse() {{
            googleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse.class);
                res.googleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * smartdevicemanagementEnterprisesDevicesList - Lists devices managed by the enterprise.
    **/
    public openapisdk.models.operations.SmartdevicemanagementEnterprisesDevicesListResponse smartdevicemanagementEnterprisesDevicesList(openapisdk.models.operations.SmartdevicemanagementEnterprisesDevicesListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{parent}/devices", request.pathParams);
        
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

        openapisdk.models.operations.SmartdevicemanagementEnterprisesDevicesListResponse res = new openapisdk.models.operations.SmartdevicemanagementEnterprisesDevicesListResponse() {{
            googleHomeEnterpriseSdmV1ListDevicesResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleHomeEnterpriseSdmV1ListDevicesResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleHomeEnterpriseSdmV1ListDevicesResponse.class);
                res.googleHomeEnterpriseSdmV1ListDevicesResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * smartdevicemanagementEnterprisesStructuresList - Lists structures managed by the enterprise.
    **/
    public openapisdk.models.operations.SmartdevicemanagementEnterprisesStructuresListResponse smartdevicemanagementEnterprisesStructuresList(openapisdk.models.operations.SmartdevicemanagementEnterprisesStructuresListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{parent}/structures", request.pathParams);
        
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

        openapisdk.models.operations.SmartdevicemanagementEnterprisesStructuresListResponse res = new openapisdk.models.operations.SmartdevicemanagementEnterprisesStructuresListResponse() {{
            googleHomeEnterpriseSdmV1ListStructuresResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleHomeEnterpriseSdmV1ListStructuresResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleHomeEnterpriseSdmV1ListStructuresResponse.class);
                res.googleHomeEnterpriseSdmV1ListStructuresResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * smartdevicemanagementEnterprisesStructuresRoomsGet - Gets a room managed by the enterprise.
    **/
    public openapisdk.models.operations.SmartdevicemanagementEnterprisesStructuresRoomsGetResponse smartdevicemanagementEnterprisesStructuresRoomsGet(openapisdk.models.operations.SmartdevicemanagementEnterprisesStructuresRoomsGetRequest request) throws Exception {
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

        openapisdk.models.operations.SmartdevicemanagementEnterprisesStructuresRoomsGetResponse res = new openapisdk.models.operations.SmartdevicemanagementEnterprisesStructuresRoomsGetResponse() {{
            googleHomeEnterpriseSdmV1Room = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleHomeEnterpriseSdmV1Room out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleHomeEnterpriseSdmV1Room.class);
                res.googleHomeEnterpriseSdmV1Room = out;
            }
        }

        return res;
    }
	
	
    /**
     * smartdevicemanagementEnterprisesStructuresRoomsList - Lists rooms managed by the enterprise.
    **/
    public openapisdk.models.operations.SmartdevicemanagementEnterprisesStructuresRoomsListResponse smartdevicemanagementEnterprisesStructuresRoomsList(openapisdk.models.operations.SmartdevicemanagementEnterprisesStructuresRoomsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{parent}/rooms", request.pathParams);
        
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

        openapisdk.models.operations.SmartdevicemanagementEnterprisesStructuresRoomsListResponse res = new openapisdk.models.operations.SmartdevicemanagementEnterprisesStructuresRoomsListResponse() {{
            googleHomeEnterpriseSdmV1ListRoomsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleHomeEnterpriseSdmV1ListRoomsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleHomeEnterpriseSdmV1ListRoomsResponse.class);
                res.googleHomeEnterpriseSdmV1ListRoomsResponse = out;
            }
        }

        return res;
    }
	
}