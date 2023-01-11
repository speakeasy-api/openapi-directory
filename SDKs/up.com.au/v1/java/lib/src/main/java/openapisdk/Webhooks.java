package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Webhooks {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Webhooks(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * deleteWebhooksId - Delete webhook
     *
     * Delete a specific webhook by providing its unique identifier. Once
     * deleted, webhook events will no longer be sent to the configured URL.
     * 
    **/
    public openapisdk.models.operations.DeleteWebhooksIdResponse deleteWebhooksId(openapisdk.models.operations.DeleteWebhooksIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/webhooks/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteWebhooksIdResponse res = new openapisdk.models.operations.DeleteWebhooksIdResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * getWebhooks - List webhooks
     *
     * Retrieve a list of configured webhooks. The returned list is
     * [paginated](#pagination) and can be scrolled by following the `next`
     * and `prev` links where present. Results are ordered oldest first to
     * newest last.
     * 
    **/
    public openapisdk.models.operations.GetWebhooksResponse getWebhooks(openapisdk.models.operations.GetWebhooksRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/webhooks");
        
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

        openapisdk.models.operations.GetWebhooksResponse res = new openapisdk.models.operations.GetWebhooksResponse() {{
            listWebhooksResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListWebhooksResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListWebhooksResponse.class);
                res.listWebhooksResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * getWebhooksId - Retrieve webhook
     *
     * Retrieve a specific webhook by providing its unique identifier.
     * 
    **/
    public openapisdk.models.operations.GetWebhooksIdResponse getWebhooksId(openapisdk.models.operations.GetWebhooksIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/webhooks/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetWebhooksIdResponse res = new openapisdk.models.operations.GetWebhooksIdResponse() {{
            getWebhookResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GetWebhookResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GetWebhookResponse.class);
                res.getWebhookResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * getWebhooksWebhookIdLogs - List webhook logs
     *
     * Retrieve a list of delivery logs for a webhook by providing its unique
     * identifier. This is useful for analysis and debugging purposes. The
     * returned list is [paginated](#pagination) and can be scrolled by
     * following the `next` and `prev` links where present. Results are ordered
     * newest first to oldest last. Logs may be automatically purged after a
     * period of time.
     * 
    **/
    public openapisdk.models.operations.GetWebhooksWebhookIdLogsResponse getWebhooksWebhookIdLogs(openapisdk.models.operations.GetWebhooksWebhookIdLogsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/webhooks/{webhookId}/logs", request.pathParams);
        
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

        openapisdk.models.operations.GetWebhooksWebhookIdLogsResponse res = new openapisdk.models.operations.GetWebhooksWebhookIdLogsResponse() {{
            listWebhookDeliveryLogsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListWebhookDeliveryLogsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListWebhookDeliveryLogsResponse.class);
                res.listWebhookDeliveryLogsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postWebhooks - Create webhook
     *
     * Create a new webhook with a given URL. The URL will receive webhook
     * events as JSON-encoded `POST` requests. The URL must respond with a HTTP
     * `200` status on success.
     * 
     * There is currently a limit of 10 webhooks at any given time. Once this
     * limit is reached, existing webhooks will need to be deleted before new
     * webhooks can be created.
     * 
     * Event delivery is retried with exponential backoff if the URL is
     * unreachable or it does not respond with a `200` status. The response
     * includes a `secretKey` attribute, which is used to sign requests sent to
     * the webhook URL. It will not be returned from any other endpoints within
     * the Up API. If the `secretKey` is lost, simply create a new webhook with
     * the same URL, capture its `secretKey` and then delete the original
     * webhook. See [Handling webhook events](#callback_post_webhookURL) for
     * details on how to process webhook events.
     * 
     * It is probably a good idea to test the webhook by
     * [sending it a `PING` event](#post_webhooks_webhookId_ping) after creating
     * it.
     * 
    **/
    public openapisdk.models.operations.PostWebhooksResponse postWebhooks(openapisdk.models.operations.PostWebhooksRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/webhooks");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostWebhooksResponse res = new openapisdk.models.operations.PostWebhooksResponse() {{
            createWebhookResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CreateWebhookResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CreateWebhookResponse.class);
                res.createWebhookResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postWebhooksWebhookIdPing - Ping webhook
     *
     * Send a `PING` event to a webhook by providing its unique identifier.
     * This is useful for testing and debugging purposes. The event is delivered
     * asynchronously and its data is returned in the response to this request.
     * 
    **/
    public openapisdk.models.operations.PostWebhooksWebhookIdPingResponse postWebhooksWebhookIdPing(openapisdk.models.operations.PostWebhooksWebhookIdPingRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/webhooks/{webhookId}/ping", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostWebhooksWebhookIdPingResponse res = new openapisdk.models.operations.PostWebhooksWebhookIdPingResponse() {{
            webhookEventCallback = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.WebhookEventCallback out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.WebhookEventCallback.class);
                res.webhookEventCallback = out;
            }
        }

        return res;
    }
	
}