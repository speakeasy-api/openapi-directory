package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Strings {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Strings(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getProjectStrings - Get a list of strings and its translations in the project.
    **/
    public openapisdk.models.operations.GetProjectStringsResponse getProjectStrings(openapisdk.models.operations.GetProjectStringsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/projects/{projectId}/strings", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetProjectStringsResponse res = new openapisdk.models.operations.GetProjectStringsResponse() {{
            stringList = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.StringList out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.StringList.class);
                res.stringList = out;
            }
        }

        return res;
    }
	
	
    /**
     * getProjectStringsForLanguage - Get a list of strings and its translations in the project for this target language in the project.
    **/
    public openapisdk.models.operations.GetProjectStringsForLanguageResponse getProjectStringsForLanguage(openapisdk.models.operations.GetProjectStringsForLanguageRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/projects/{projectId}/strings/{language}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetProjectStringsForLanguageResponse res = new openapisdk.models.operations.GetProjectStringsForLanguageResponse() {{
            stringList = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.StringList out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.StringList.class);
                res.stringList = out;
            }
        }

        return res;
    }
	
	
    /**
     * getStrings - Get a list of client/corporate strings (20 per page)
    **/
    public openapisdk.models.operations.GetStringsResponse getStrings(openapisdk.models.operations.GetStringsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/strings");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetStringsResponse res = new openapisdk.models.operations.GetStringsResponse() {{
            clientStrings = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ClientStrings out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ClientStrings.class);
                res.clientStrings = out;
            }
        }

        return res;
    }
	
	
    /**
     * packageProjectTranslationMemory - Get the translation memory of a project in TMX format
    **/
    public openapisdk.models.operations.PackageProjectTranslationMemoryResponse packageProjectTranslationMemory(openapisdk.models.operations.PackageProjectTranslationMemoryRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/projects/{projectId}/strings/package", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PackageProjectTranslationMemoryResponse res = new openapisdk.models.operations.PackageProjectTranslationMemoryResponse() {{
            asyncOperationStatus = null;
            packageProjectTranslationMemory200ApplicationXMLBinaryString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AsyncOperationStatus out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AsyncOperationStatus.class);
                res.asyncOperationStatus = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.packageProjectTranslationMemory200ApplicationXMLBinaryString = out;
            }
        }

        return res;
    }
	
	
    /**
     * packageProjectTranslationMemoryForLanguage - Get the translation memory of a project in TMX format
    **/
    public openapisdk.models.operations.PackageProjectTranslationMemoryForLanguageResponse packageProjectTranslationMemoryForLanguage(openapisdk.models.operations.PackageProjectTranslationMemoryForLanguageRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/projects/{projectId}/strings/{languageCode}/package", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PackageProjectTranslationMemoryForLanguageResponse res = new openapisdk.models.operations.PackageProjectTranslationMemoryForLanguageResponse() {{
            asyncOperationStatus = null;
            packageProjectTranslationMemoryForLanguage200ApplicationXMLBinaryString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AsyncOperationStatus out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AsyncOperationStatus.class);
                res.asyncOperationStatus = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.packageProjectTranslationMemoryForLanguage200ApplicationXMLBinaryString = out;
            }
        }

        return res;
    }
	
	
    /**
     * packageProjectTranslationMemoryForLanguageStatus - If package call was async, check the status of the request
    **/
    public openapisdk.models.operations.PackageProjectTranslationMemoryForLanguageStatusResponse packageProjectTranslationMemoryForLanguageStatus(openapisdk.models.operations.PackageProjectTranslationMemoryForLanguageStatusRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/projects/{projectId}/strings/{languageCode}/package/status", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PackageProjectTranslationMemoryForLanguageStatusResponse res = new openapisdk.models.operations.PackageProjectTranslationMemoryForLanguageStatusResponse() {{
            asyncOperationStatus = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AsyncOperationStatus out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AsyncOperationStatus.class);
                res.asyncOperationStatus = out;
            }
        }

        return res;
    }
	
	
    /**
     * packageProjectTranslationMemoryStatus - If package call was async, check the status of the request
    **/
    public openapisdk.models.operations.PackageProjectTranslationMemoryStatusResponse packageProjectTranslationMemoryStatus(openapisdk.models.operations.PackageProjectTranslationMemoryStatusRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/projects/{projectId}/strings/package/status", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PackageProjectTranslationMemoryStatusResponse res = new openapisdk.models.operations.PackageProjectTranslationMemoryStatusResponse() {{
            asyncOperationStatus = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AsyncOperationStatus out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AsyncOperationStatus.class);
                res.asyncOperationStatus = out;
            }
        }

        return res;
    }
	
	
    /**
     * packageUserTranslationMemory - Get the translation memory of a client or corporate in TMX format
    **/
    public openapisdk.models.operations.PackageUserTranslationMemoryResponse packageUserTranslationMemory(openapisdk.models.operations.PackageUserTranslationMemoryRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/strings/{languageCode}/package", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PackageUserTranslationMemoryResponse res = new openapisdk.models.operations.PackageUserTranslationMemoryResponse() {{
            asyncOperationStatus = null;
            packageUserTranslationMemory200ApplicationXMLBinaryString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AsyncOperationStatus out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AsyncOperationStatus.class);
                res.asyncOperationStatus = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.packageUserTranslationMemory200ApplicationXMLBinaryString = out;
            }
        }

        return res;
    }
	
	
    /**
     * packageUserTranslationMemoryForLanguageStatus - If package call was async, check the status of the request
    **/
    public openapisdk.models.operations.PackageUserTranslationMemoryForLanguageStatusResponse packageUserTranslationMemoryForLanguageStatus(openapisdk.models.operations.PackageUserTranslationMemoryForLanguageStatusRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/strings/{languageCode}/package/status", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PackageUserTranslationMemoryForLanguageStatusResponse res = new openapisdk.models.operations.PackageUserTranslationMemoryForLanguageStatusResponse() {{
            asyncOperationStatus = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AsyncOperationStatus out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AsyncOperationStatus.class);
                res.asyncOperationStatus = out;
            }
        }

        return res;
    }
	
	
    /**
     * postStrings - Translate Strings with MT
    **/
    public openapisdk.models.operations.PostStringsResponse postStrings(openapisdk.models.operations.PostStringsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/strings");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostStringsResponse res = new openapisdk.models.operations.PostStringsResponse() {{
            machineTranslatedStrings = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.MachineTranslatedStrings out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.MachineTranslatedStrings.class);
                res.machineTranslatedStrings = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateTranslationMemoryUnit - Update translation
     *
     * Update a translation by adding a new translation memory unit item
    **/
    public openapisdk.models.operations.UpdateTranslationMemoryUnitResponse updateTranslationMemoryUnit(openapisdk.models.operations.UpdateTranslationMemoryUnitRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/strings");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateTranslationMemoryUnitResponse res = new openapisdk.models.operations.UpdateTranslationMemoryUnitResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 500) {
        }

        return res;
    }
	
}