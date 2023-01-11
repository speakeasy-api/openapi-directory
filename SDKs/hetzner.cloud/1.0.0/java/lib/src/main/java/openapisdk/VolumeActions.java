package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class VolumeActions {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public VolumeActions(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getVolumesIdActions - Get all Actions for a Volume
     *
     * Returns all Action objects for a Volume. You can `sort` the results by using the sort URI parameter, and filter them with the `status` parameter.
    **/
    public openapisdk.models.operations.GetVolumesIdActionsResponse getVolumesIdActions(openapisdk.models.operations.GetVolumesIdActionsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/volumes/{id}/actions", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetVolumesIdActionsResponse res = new openapisdk.models.operations.GetVolumesIdActionsResponse() {{
            actionsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetVolumesIdActionsActionsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetVolumesIdActionsActionsResponse.class);
                res.actionsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * getVolumesIdActionsActionId - Get an Action for a Volume
     *
     * Returns a specific Action for a Volume.
    **/
    public openapisdk.models.operations.GetVolumesIdActionsActionIdResponse getVolumesIdActionsActionId(openapisdk.models.operations.GetVolumesIdActionsActionIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/volumes/{id}/actions/{action_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetVolumesIdActionsActionIdResponse res = new openapisdk.models.operations.GetVolumesIdActionsActionIdResponse() {{
            actionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetVolumesIdActionsActionIdActionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetVolumesIdActionsActionIdActionResponse.class);
                res.actionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postVolumesIdActionsAttach - Attach Volume to a Server
     *
     * Attaches a Volume to a Server. Works only if the Server is in the same Location as the Volume.
    **/
    public openapisdk.models.operations.PostVolumesIdActionsAttachResponse postVolumesIdActionsAttach(openapisdk.models.operations.PostVolumesIdActionsAttachRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/volumes/{id}/actions/attach", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostVolumesIdActionsAttachResponse res = new openapisdk.models.operations.PostVolumesIdActionsAttachResponse() {{
            actionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostVolumesIdActionsAttachActionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostVolumesIdActionsAttachActionResponse.class);
                res.actionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postVolumesIdActionsChangeProtection - Change Volume Protection
     *
     * Changes the protection configuration of a Volume.
    **/
    public openapisdk.models.operations.PostVolumesIdActionsChangeProtectionResponse postVolumesIdActionsChangeProtection(openapisdk.models.operations.PostVolumesIdActionsChangeProtectionRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/volumes/{id}/actions/change_protection", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostVolumesIdActionsChangeProtectionResponse res = new openapisdk.models.operations.PostVolumesIdActionsChangeProtectionResponse() {{
            actionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostVolumesIdActionsChangeProtectionActionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostVolumesIdActionsChangeProtectionActionResponse.class);
                res.actionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postVolumesIdActionsDetach - Detach Volume
     *
     * Detaches a Volume from the Server it’s attached to. You may attach it to a Server again at a later time.
    **/
    public openapisdk.models.operations.PostVolumesIdActionsDetachResponse postVolumesIdActionsDetach(openapisdk.models.operations.PostVolumesIdActionsDetachRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/volumes/{id}/actions/detach", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostVolumesIdActionsDetachResponse res = new openapisdk.models.operations.PostVolumesIdActionsDetachResponse() {{
            actionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostVolumesIdActionsDetachActionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostVolumesIdActionsDetachActionResponse.class);
                res.actionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postVolumesIdActionsResize - Resize Volume
     *
     * Changes the size of a Volume. Note that downsizing a Volume is not possible.
    **/
    public openapisdk.models.operations.PostVolumesIdActionsResizeResponse postVolumesIdActionsResize(openapisdk.models.operations.PostVolumesIdActionsResizeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/volumes/{id}/actions/resize", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostVolumesIdActionsResizeResponse res = new openapisdk.models.operations.PostVolumesIdActionsResizeResponse() {{
            actionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostVolumesIdActionsResizeActionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostVolumesIdActionsResizeActionResponse.class);
                res.actionResponse = out;
            }
        }

        return res;
    }
	
}