package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class Client {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Client(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getClientClientId - Get a Client
     *
     * Use this endpoint to generate a random client. The client is generated in a deterministic way, on the bases of the client ID given as a path parameter.
     * In the case of identical client IDs, the endpoint will generate the same client object. The properties of the generated client object are randomly generated on the basis of the client ID.
     * In lack of a client ID, all calls generate a different client object to the randomly generated client ID.
     * 
     * By providing an email address as the `client_id` parameter, you can customize the client logo by the use of the gravatar associated with the email address.
     * 
     * If the `client_id` parameter contains minimum one dot (`.`) or space (` `) character, the client_name is produced from the parameter, rather than being generated.`
     * 
     * The result is always a client object. If you want to generate multiple clients in one single step, you can do it by the use of *Fleet* generation.
     * The members of a fleet are clients randomly generated from the fleet name.
    **/
    public openapisdk.models.operations.GetClientClientIdResponse getClientClientId(openapisdk.models.operations.GetClientClientIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/client/{client_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetClientClientIdResponse res = new openapisdk.models.operations.GetClientClientIdResponse() {{
            getClientClientId200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetClientClientId200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetClientClientId200ApplicationJson.class);
                res.getClientClientId200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getClientClientIdTokenKind - Get a Client Token
     *
     * It is used to generate a OpenID Connect token as a path parameter to a client of a given client ID.
     * 
     * It is primarily used for testing purposes, when, for example, the token from the standard authentication flow is not available to the test code.
    **/
    public openapisdk.models.operations.GetClientClientIdTokenKindResponse getClientClientIdTokenKind(openapisdk.models.operations.GetClientClientIdTokenKindRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/client/{client_id}/token/{kind}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetClientClientIdTokenKindResponse res = new openapisdk.models.operations.GetClientClientIdTokenKindResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * postClient - Create a Client Selfie
     *
     * To create a selfie token from the client data, you need an opaqe string token, which contains the encoded client properties sent in the request.
     * Later, the selfie token can be used as a client ID. In this case, the client data is included in the selfie token, that is, the client properties are taken from the token.
     * By the use of a selfie token, you can use your own client objects in the authentication process.
    **/
    public openapisdk.models.operations.PostClientResponse postClient(openapisdk.models.operations.PostClientRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/client");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostClientResponse res = new openapisdk.models.operations.PostClientResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
}