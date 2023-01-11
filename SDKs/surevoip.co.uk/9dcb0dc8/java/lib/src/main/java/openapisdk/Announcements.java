package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class Announcements {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Announcements(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * deleteCustomersAccountAnnouncementsAnnouncementId - Delete an announcement audio file
    **/
    public openapisdk.models.operations.DeleteCustomersAccountAnnouncementsAnnouncementIdResponse deleteCustomersAccountAnnouncementsAnnouncementId(openapisdk.models.operations.DeleteCustomersAccountAnnouncementsAnnouncementIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/customers/{account}/announcements/{announcement_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteCustomersAccountAnnouncementsAnnouncementIdResponse res = new openapisdk.models.operations.DeleteCustomersAccountAnnouncementsAnnouncementIdResponse() {{
            oneannouncementsPostResponses403ContentApplication1jsonSchema = null;
            oneannouncementsPostResponses403ContentApplication1jsonSchema = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.OneannouncementsPostResponses403ContentApplication1jsonSchema out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.OneannouncementsPostResponses403ContentApplication1jsonSchema.class);
                res.oneannouncementsPostResponses403ContentApplication1jsonSchema = out;
            }
        }
        else if (httpRes.statusCode() == 410) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.OneannouncementsPostResponses403ContentApplication1jsonSchema out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.OneannouncementsPostResponses403ContentApplication1jsonSchema.class);
                res.oneannouncementsPostResponses403ContentApplication1jsonSchema = out;
            }
        }

        return res;
    }
	
	
    /**
     * getAnnouncements - List global announcements
    **/
    public openapisdk.models.operations.GetAnnouncementsResponse getAnnouncements() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/announcements");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetAnnouncementsResponse res = new openapisdk.models.operations.GetAnnouncementsResponse() {{
            oneGetResponses200ContentApplication1jsonSchema = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.OneGetResponses200ContentApplication1jsonSchema out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.OneGetResponses200ContentApplication1jsonSchema.class);
                res.oneGetResponses200ContentApplication1jsonSchema = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * getCustomersAccountAnnouncements - List of announcement audio files
    **/
    public openapisdk.models.operations.GetCustomersAccountAnnouncementsResponse getCustomersAccountAnnouncements(openapisdk.models.operations.GetCustomersAccountAnnouncementsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/customers/{account}/announcements", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetCustomersAccountAnnouncementsResponse res = new openapisdk.models.operations.GetCustomersAccountAnnouncementsResponse() {{
            getCustomersAccountAnnouncements200ApplicationJSONObject = null;
            oneannouncementsPostResponses403ContentApplication1jsonSchema = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetCustomersAccountAnnouncements200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetCustomersAccountAnnouncements200ApplicationJson.class);
                res.getCustomersAccountAnnouncements200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.OneannouncementsPostResponses403ContentApplication1jsonSchema out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.OneannouncementsPostResponses403ContentApplication1jsonSchema.class);
                res.oneannouncementsPostResponses403ContentApplication1jsonSchema = out;
            }
        }

        return res;
    }
	
	
    /**
     * getCustomersAccountAnnouncementsAnnouncementId - Represents an announcement audio file
    **/
    public openapisdk.models.operations.GetCustomersAccountAnnouncementsAnnouncementIdResponse getCustomersAccountAnnouncementsAnnouncementId(openapisdk.models.operations.GetCustomersAccountAnnouncementsAnnouncementIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/customers/{account}/announcements/{announcement_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetCustomersAccountAnnouncementsAnnouncementIdResponse res = new openapisdk.models.operations.GetCustomersAccountAnnouncementsAnnouncementIdResponse() {{
            oneannouncementsPostResponses201ContentApplication1jsonSchema = null;
            getCustomersAccountAnnouncementsAnnouncementId404ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.OneannouncementsPostResponses201ContentApplication1jsonSchema out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.OneannouncementsPostResponses201ContentApplication1jsonSchema.class);
                res.oneannouncementsPostResponses201ContentApplication1jsonSchema = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetCustomersAccountAnnouncementsAnnouncementId404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetCustomersAccountAnnouncementsAnnouncementId404ApplicationJson.class);
                res.getCustomersAccountAnnouncementsAnnouncementId404ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postAnnouncements - Add a new announcement audio file
    **/
    public openapisdk.models.operations.PostAnnouncementsResponse postAnnouncements(openapisdk.models.operations.PostAnnouncementsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/announcements");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostAnnouncementsResponse res = new openapisdk.models.operations.PostAnnouncementsResponse() {{
            postAnnouncements201ApplicationJSONObject = null;
            postAnnouncements400ApplicationJSONObject = null;
            postAnnouncements403ApplicationJSONObject = null;
            oneannouncementsPostResponses403ContentApplication1jsonSchema = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostAnnouncements201ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostAnnouncements201ApplicationJson.class);
                res.postAnnouncements201ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostAnnouncements400ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostAnnouncements400ApplicationJson.class);
                res.postAnnouncements400ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostAnnouncements403ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostAnnouncements403ApplicationJson.class);
                res.postAnnouncements403ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.OneannouncementsPostResponses403ContentApplication1jsonSchema out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.OneannouncementsPostResponses403ContentApplication1jsonSchema.class);
                res.oneannouncementsPostResponses403ContentApplication1jsonSchema = out;
            }
        }

        return res;
    }
	
}