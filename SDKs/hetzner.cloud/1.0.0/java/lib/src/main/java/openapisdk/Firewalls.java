package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Firewalls {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Firewalls(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * deleteFirewallsId - Delete a Firewall
     *
     * Deletes a Firewall.
     * 
     * #### Call specific error codes
     * 
     * | Code              | Description                               |
     * |-------------------|-------------------------------------------|
     * | `resource_in_use` | Firewall must not be in use to be deleted |
     * 
    **/
    public openapisdk.models.operations.DeleteFirewallsIdResponse deleteFirewallsId(openapisdk.models.operations.DeleteFirewallsIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/firewalls/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteFirewallsIdResponse res = new openapisdk.models.operations.DeleteFirewallsIdResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * getFirewalls - Get all Firewalls
     *
     * Returns all Firewall objects.
    **/
    public openapisdk.models.operations.GetFirewallsResponse getFirewalls(openapisdk.models.operations.GetFirewallsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/firewalls");
        
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

        openapisdk.models.operations.GetFirewallsResponse res = new openapisdk.models.operations.GetFirewallsResponse() {{
            firewallsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetFirewallsFirewallsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetFirewallsFirewallsResponse.class);
                res.firewallsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * getFirewallsId - Get a Firewall
     *
     * Gets a specific Firewall object.
    **/
    public openapisdk.models.operations.GetFirewallsIdResponse getFirewallsId(openapisdk.models.operations.GetFirewallsIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/firewalls/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetFirewallsIdResponse res = new openapisdk.models.operations.GetFirewallsIdResponse() {{
            firewallResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetFirewallsIdFirewallResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetFirewallsIdFirewallResponse.class);
                res.firewallResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postFirewalls - Create a Firewall
     *
     * Creates a new Firewall.
     * 
     * #### Call specific error codes
     * 
     * | Code                        | Description                                             |
     * |-----------------------------|---------------------------------------------------------|
     * | `server_already_added`      | Server added more than one time to resource             |
     * | `incompatible_network_type` | The Network type is incompatible for the given resource |
     * 
    **/
    public openapisdk.models.operations.PostFirewallsResponse postFirewalls(openapisdk.models.operations.PostFirewallsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/firewalls");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostFirewallsResponse res = new openapisdk.models.operations.PostFirewallsResponse() {{
            createFirewallResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostFirewallsCreateFirewallResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostFirewallsCreateFirewallResponse.class);
                res.createFirewallResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * putFirewallsId - Update a Firewall
     *
     * Updates the Firewall.
     * 
     * Note that when updating labels, the Firewall's current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.
     * 
     * Note: if the Firewall object changes during the request, the response will be a “conflict” error.
     * 
    **/
    public openapisdk.models.operations.PutFirewallsIdResponse putFirewallsId(openapisdk.models.operations.PutFirewallsIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/firewalls/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PutFirewallsIdResponse res = new openapisdk.models.operations.PutFirewallsIdResponse() {{
            firewallResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PutFirewallsIdFirewallResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PutFirewallsIdFirewallResponse.class);
                res.firewallResponse = out;
            }
        }

        return res;
    }
	
}