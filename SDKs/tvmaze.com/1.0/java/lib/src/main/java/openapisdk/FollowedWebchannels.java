package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class FollowedWebchannels {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public FollowedWebchannels(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * deleteUserFollowsWebchannelsWebchannelId - Unfollow a webchannel
    **/
    public openapisdk.models.operations.DeleteUserFollowsWebchannelsWebchannelIdResponse deleteUserFollowsWebchannelsWebchannelId(openapisdk.models.operations.DeleteUserFollowsWebchannelsWebchannelIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/user/follows/webchannels/{webchannel_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteUserFollowsWebchannelsWebchannelIdResponse res = new openapisdk.models.operations.DeleteUserFollowsWebchannelsWebchannelIdResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 404) {
        }

        return res;
    }
	
	
    /**
     * getUserFollowsWebchannels - List the followed webchannels
    **/
    public openapisdk.models.operations.GetUserFollowsWebchannelsResponse getUserFollowsWebchannels(openapisdk.models.operations.GetUserFollowsWebchannelsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/user/follows/webchannels");
        
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

        openapisdk.models.operations.GetUserFollowsWebchannelsResponse res = new openapisdk.models.operations.GetUserFollowsWebchannelsResponse() {{
            webchannelFollows = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.WebchannelFollow[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.WebchannelFollow[].class);
                res.webchannelFollows = out;
            }
        }

        return res;
    }
	
	
    /**
     * getUserFollowsWebchannelsWebchannelId - Check if a webchannel is followed
    **/
    public openapisdk.models.operations.GetUserFollowsWebchannelsWebchannelIdResponse getUserFollowsWebchannelsWebchannelId(openapisdk.models.operations.GetUserFollowsWebchannelsWebchannelIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/user/follows/webchannels/{webchannel_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetUserFollowsWebchannelsWebchannelIdResponse res = new openapisdk.models.operations.GetUserFollowsWebchannelsWebchannelIdResponse() {{
            webchannelFollow = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.WebchannelFollow out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.WebchannelFollow.class);
                res.webchannelFollow = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
        }

        return res;
    }
	
	
    /**
     * putUserFollowsWebchannelsWebchannelId - Follow a webchannel
    **/
    public openapisdk.models.operations.PutUserFollowsWebchannelsWebchannelIdResponse putUserFollowsWebchannelsWebchannelId(openapisdk.models.operations.PutUserFollowsWebchannelsWebchannelIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/user/follows/webchannels/{webchannel_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PutUserFollowsWebchannelsWebchannelIdResponse res = new openapisdk.models.operations.PutUserFollowsWebchannelsWebchannelIdResponse() {{
            webchannelFollow = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.WebchannelFollow out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.WebchannelFollow.class);
                res.webchannelFollow = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
        }

        return res;
    }
	
}