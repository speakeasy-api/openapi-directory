package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class Status {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Status(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatus - Get subscription statuses for a contact
     *
     * Returns a list of subscriptions and their status for a given contact.
    **/
    public openapisdk.models.operations.GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusResponse getCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatus(openapisdk.models.operations.GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/communication-preferences/v3/status/email/{emailAddress}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusResponse res = new openapisdk.models.operations.GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusResponse() {{
            publicSubscriptionStatusesResponse = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PublicSubscriptionStatusesResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PublicSubscriptionStatusesResponse.class);
                res.publicSubscriptionStatusesResponse = out;
            }
        }
        else {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postCommunicationPreferencesV3SubscribeSubscribe - Subscribe a contact
     *
     * Subscribes a contact to the given subscription type. This API is not valid to use for subscribing a contact at a brand or portal level and will return an error.
    **/
    public openapisdk.models.operations.PostCommunicationPreferencesV3SubscribeSubscribeResponse postCommunicationPreferencesV3SubscribeSubscribe(openapisdk.models.operations.PostCommunicationPreferencesV3SubscribeSubscribeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/communication-preferences/v3/subscribe");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostCommunicationPreferencesV3SubscribeSubscribeResponse res = new openapisdk.models.operations.PostCommunicationPreferencesV3SubscribeSubscribeResponse() {{
            publicSubscriptionStatus = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PublicSubscriptionStatus out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PublicSubscriptionStatus.class);
                res.publicSubscriptionStatus = out;
            }
        }
        else {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postCommunicationPreferencesV3UnsubscribeUnsubscribe - Unsubscribe a contact
     *
     * Unsubscribes a contact from the given subscription type. This API is not valid to use for unsubscribing a contact at a brand or portal level and will return an error.
    **/
    public openapisdk.models.operations.PostCommunicationPreferencesV3UnsubscribeUnsubscribeResponse postCommunicationPreferencesV3UnsubscribeUnsubscribe(openapisdk.models.operations.PostCommunicationPreferencesV3UnsubscribeUnsubscribeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/communication-preferences/v3/unsubscribe");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostCommunicationPreferencesV3UnsubscribeUnsubscribeResponse res = new openapisdk.models.operations.PostCommunicationPreferencesV3UnsubscribeUnsubscribeResponse() {{
            publicSubscriptionStatus = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PublicSubscriptionStatus out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PublicSubscriptionStatus.class);
                res.publicSubscriptionStatus = out;
            }
        }
        else {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
}