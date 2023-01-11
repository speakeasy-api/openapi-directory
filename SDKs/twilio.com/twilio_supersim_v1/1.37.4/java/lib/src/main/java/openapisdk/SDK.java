

package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.SpeakeasyHTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;


public class SDK {
	public static final String[] SERVERS = {
		"https://supersim.twilio.com",
	};
  		

	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	
	private String _serverUrl;
	private String _language = "java";
	private String _sdkVersion = "0.0.1";
	private String _genVersion = "internal";

	public static class Builder {
		private HTTPClient client;
		
		private String serverUrl;
		private java.util.Map<String, String> params = new java.util.HashMap<String, String>();

		private Builder() {
		}

		public Builder setClient(HTTPClient client) {
			this.client = client;
			return this;
		}
		
		public Builder setServerURL(String serverUrl) {
			this.serverUrl = serverUrl;
			return this;
		}
		
		public Builder setServerURL(String serverUrl, java.util.Map<String, String> params) {
			this.serverUrl = serverUrl;
			this.params = params;
			return this;
		}
		
		public SDK build() throws Exception {
			return new SDK(this.client, this.serverUrl, this.params);
		}
	}

	public static Builder builder() {
		return new Builder();
	}

	private SDK(HTTPClient client, String serverUrl, java.util.Map<String, String> params) throws Exception {
		this._defaultClient = client;
		
		if (this._defaultClient == null) {
			this._defaultClient = new SpeakeasyHTTPClient();
		}
		
		if (this._securityClient == null) {
			this._securityClient = this._defaultClient;
		}

		if (serverUrl != null && !serverUrl.isBlank()) {
			this._serverUrl = openapisdk.utils.Utils.replaceParameters(serverUrl, params);
		}
		
		if (this._serverUrl == null) {
			this._serverUrl = SERVERS[0];
		}
		
	}
	
	
    /**
     * createEsimProfile - Order an eSIM Profile.
    **/
    public openapisdk.models.operations.CreateEsimProfileResponse createEsimProfile(openapisdk.models.operations.CreateEsimProfileRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateEsimProfileRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/ESimProfiles");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateEsimProfileResponse res = new openapisdk.models.operations.CreateEsimProfileResponse() {{
            supersimV1EsimProfile = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SupersimV1EsimProfile out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SupersimV1EsimProfile.class);
                res.supersimV1EsimProfile = out;
            }
        }

        return res;
    }
	
	
    /**
     * createFleet - Create a Fleet
    **/
    public openapisdk.models.operations.CreateFleetResponse createFleet(openapisdk.models.operations.CreateFleetRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateFleetRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Fleets");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateFleetResponse res = new openapisdk.models.operations.CreateFleetResponse() {{
            supersimV1Fleet = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SupersimV1Fleet out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SupersimV1Fleet.class);
                res.supersimV1Fleet = out;
            }
        }

        return res;
    }
	
	
    /**
     * createIpCommand - Send an IP Command to a Super SIM.
    **/
    public openapisdk.models.operations.CreateIpCommandResponse createIpCommand(openapisdk.models.operations.CreateIpCommandRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateIpCommandRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/IpCommands");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateIpCommandResponse res = new openapisdk.models.operations.CreateIpCommandResponse() {{
            supersimV1IpCommand = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SupersimV1IpCommand out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SupersimV1IpCommand.class);
                res.supersimV1IpCommand = out;
            }
        }

        return res;
    }
	
	
    /**
     * createNetworkAccessProfile - Create a new Network Access Profile
    **/
    public openapisdk.models.operations.CreateNetworkAccessProfileResponse createNetworkAccessProfile(openapisdk.models.operations.CreateNetworkAccessProfileRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateNetworkAccessProfileRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/NetworkAccessProfiles");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateNetworkAccessProfileResponse res = new openapisdk.models.operations.CreateNetworkAccessProfileResponse() {{
            supersimV1NetworkAccessProfile = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SupersimV1NetworkAccessProfile out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SupersimV1NetworkAccessProfile.class);
                res.supersimV1NetworkAccessProfile = out;
            }
        }

        return res;
    }
	
	
    /**
     * createNetworkAccessProfileNetwork - Add a Network resource to the Network Access Profile resource.
    **/
    public openapisdk.models.operations.CreateNetworkAccessProfileNetworkResponse createNetworkAccessProfileNetwork(openapisdk.models.operations.CreateNetworkAccessProfileNetworkRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateNetworkAccessProfileNetworkRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/NetworkAccessProfiles/{NetworkAccessProfileSid}/Networks", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateNetworkAccessProfileNetworkResponse res = new openapisdk.models.operations.CreateNetworkAccessProfileNetworkResponse() {{
            supersimV1NetworkAccessProfileNetworkAccessProfileNetwork = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork.class);
                res.supersimV1NetworkAccessProfileNetworkAccessProfileNetwork = out;
            }
        }

        return res;
    }
	
	
    /**
     * createSim - Register a Super SIM to your Account
    **/
    public openapisdk.models.operations.CreateSimResponse createSim(openapisdk.models.operations.CreateSimRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateSimRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Sims");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateSimResponse res = new openapisdk.models.operations.CreateSimResponse() {{
            supersimV1Sim = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SupersimV1Sim out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SupersimV1Sim.class);
                res.supersimV1Sim = out;
            }
        }

        return res;
    }
	
	
    /**
     * createSmsCommand - Send SMS Command to a Sim.
    **/
    public openapisdk.models.operations.CreateSmsCommandResponse createSmsCommand(openapisdk.models.operations.CreateSmsCommandRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateSmsCommandRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/SmsCommands");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateSmsCommandResponse res = new openapisdk.models.operations.CreateSmsCommandResponse() {{
            supersimV1SmsCommand = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SupersimV1SmsCommand out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SupersimV1SmsCommand.class);
                res.supersimV1SmsCommand = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteNetworkAccessProfileNetwork - Remove a Network resource from the Network Access Profile resource's.
    **/
    public openapisdk.models.operations.DeleteNetworkAccessProfileNetworkResponse deleteNetworkAccessProfileNetwork(openapisdk.models.operations.DeleteNetworkAccessProfileNetworkRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteNetworkAccessProfileNetworkRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/NetworkAccessProfiles/{NetworkAccessProfileSid}/Networks/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteNetworkAccessProfileNetworkResponse res = new openapisdk.models.operations.DeleteNetworkAccessProfileNetworkResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * fetchEsimProfile - Fetch an eSIM Profile.
    **/
    public openapisdk.models.operations.FetchEsimProfileResponse fetchEsimProfile(openapisdk.models.operations.FetchEsimProfileRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchEsimProfileRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/ESimProfiles/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchEsimProfileResponse res = new openapisdk.models.operations.FetchEsimProfileResponse() {{
            supersimV1EsimProfile = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SupersimV1EsimProfile out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SupersimV1EsimProfile.class);
                res.supersimV1EsimProfile = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchFleet - Fetch a Fleet instance from your account.
    **/
    public openapisdk.models.operations.FetchFleetResponse fetchFleet(openapisdk.models.operations.FetchFleetRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchFleetRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Fleets/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchFleetResponse res = new openapisdk.models.operations.FetchFleetResponse() {{
            supersimV1Fleet = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SupersimV1Fleet out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SupersimV1Fleet.class);
                res.supersimV1Fleet = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchIpCommand - Fetch IP Command instance from your account.
    **/
    public openapisdk.models.operations.FetchIpCommandResponse fetchIpCommand(openapisdk.models.operations.FetchIpCommandRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchIpCommandRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/IpCommands/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchIpCommandResponse res = new openapisdk.models.operations.FetchIpCommandResponse() {{
            supersimV1IpCommand = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SupersimV1IpCommand out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SupersimV1IpCommand.class);
                res.supersimV1IpCommand = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchNetwork - Fetch a Network resource.
    **/
    public openapisdk.models.operations.FetchNetworkResponse fetchNetwork(openapisdk.models.operations.FetchNetworkRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchNetworkRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Networks/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchNetworkResponse res = new openapisdk.models.operations.FetchNetworkResponse() {{
            supersimV1Network = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SupersimV1Network out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SupersimV1Network.class);
                res.supersimV1Network = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchNetworkAccessProfile - Fetch a Network Access Profile instance from your account.
    **/
    public openapisdk.models.operations.FetchNetworkAccessProfileResponse fetchNetworkAccessProfile(openapisdk.models.operations.FetchNetworkAccessProfileRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchNetworkAccessProfileRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/NetworkAccessProfiles/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchNetworkAccessProfileResponse res = new openapisdk.models.operations.FetchNetworkAccessProfileResponse() {{
            supersimV1NetworkAccessProfile = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SupersimV1NetworkAccessProfile out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SupersimV1NetworkAccessProfile.class);
                res.supersimV1NetworkAccessProfile = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchNetworkAccessProfileNetwork - Fetch a Network Access Profile resource's Network resource.
    **/
    public openapisdk.models.operations.FetchNetworkAccessProfileNetworkResponse fetchNetworkAccessProfileNetwork(openapisdk.models.operations.FetchNetworkAccessProfileNetworkRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchNetworkAccessProfileNetworkRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/NetworkAccessProfiles/{NetworkAccessProfileSid}/Networks/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchNetworkAccessProfileNetworkResponse res = new openapisdk.models.operations.FetchNetworkAccessProfileNetworkResponse() {{
            supersimV1NetworkAccessProfileNetworkAccessProfileNetwork = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork.class);
                res.supersimV1NetworkAccessProfileNetworkAccessProfileNetwork = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchSim - Fetch a Super SIM instance from your account.
    **/
    public openapisdk.models.operations.FetchSimResponse fetchSim(openapisdk.models.operations.FetchSimRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchSimRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Sims/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchSimResponse res = new openapisdk.models.operations.FetchSimResponse() {{
            supersimV1Sim = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SupersimV1Sim out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SupersimV1Sim.class);
                res.supersimV1Sim = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchSmsCommand - Fetch SMS Command instance from your account.
    **/
    public openapisdk.models.operations.FetchSmsCommandResponse fetchSmsCommand(openapisdk.models.operations.FetchSmsCommandRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchSmsCommandRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/SmsCommands/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchSmsCommandResponse res = new openapisdk.models.operations.FetchSmsCommandResponse() {{
            supersimV1SmsCommand = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SupersimV1SmsCommand out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SupersimV1SmsCommand.class);
                res.supersimV1SmsCommand = out;
            }
        }

        return res;
    }
	
	
    /**
     * listBillingPeriod - Retrieve a list of Billing Periods for a Super SIM.
    **/
    public openapisdk.models.operations.ListBillingPeriodResponse listBillingPeriod(openapisdk.models.operations.ListBillingPeriodRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListBillingPeriodRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Sims/{SimSid}/BillingPeriods", request.pathParams);
        
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

        openapisdk.models.operations.ListBillingPeriodResponse res = new openapisdk.models.operations.ListBillingPeriodResponse() {{
            listBillingPeriodResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListBillingPeriodListBillingPeriodResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListBillingPeriodListBillingPeriodResponse.class);
                res.listBillingPeriodResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listEsimProfile - Retrieve a list of eSIM Profiles.
    **/
    public openapisdk.models.operations.ListEsimProfileResponse listEsimProfile(openapisdk.models.operations.ListEsimProfileRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListEsimProfileRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/ESimProfiles");
        
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

        openapisdk.models.operations.ListEsimProfileResponse res = new openapisdk.models.operations.ListEsimProfileResponse() {{
            listEsimProfileResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListEsimProfileListEsimProfileResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListEsimProfileListEsimProfileResponse.class);
                res.listEsimProfileResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listFleet - Retrieve a list of Fleets from your account.
    **/
    public openapisdk.models.operations.ListFleetResponse listFleet(openapisdk.models.operations.ListFleetRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListFleetRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Fleets");
        
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

        openapisdk.models.operations.ListFleetResponse res = new openapisdk.models.operations.ListFleetResponse() {{
            listFleetResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListFleetListFleetResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListFleetListFleetResponse.class);
                res.listFleetResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listIpCommand - Retrieve a list of IP Commands from your account.
    **/
    public openapisdk.models.operations.ListIpCommandResponse listIpCommand(openapisdk.models.operations.ListIpCommandRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListIpCommandRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/IpCommands");
        
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

        openapisdk.models.operations.ListIpCommandResponse res = new openapisdk.models.operations.ListIpCommandResponse() {{
            listIpCommandResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListIpCommandListIpCommandResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListIpCommandListIpCommandResponse.class);
                res.listIpCommandResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listNetwork - Retrieve a list of Network resources.
    **/
    public openapisdk.models.operations.ListNetworkResponse listNetwork(openapisdk.models.operations.ListNetworkRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListNetworkRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Networks");
        
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

        openapisdk.models.operations.ListNetworkResponse res = new openapisdk.models.operations.ListNetworkResponse() {{
            listNetworkResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListNetworkListNetworkResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListNetworkListNetworkResponse.class);
                res.listNetworkResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listNetworkAccessProfile - Retrieve a list of Network Access Profiles from your account.
    **/
    public openapisdk.models.operations.ListNetworkAccessProfileResponse listNetworkAccessProfile(openapisdk.models.operations.ListNetworkAccessProfileRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListNetworkAccessProfileRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/NetworkAccessProfiles");
        
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

        openapisdk.models.operations.ListNetworkAccessProfileResponse res = new openapisdk.models.operations.ListNetworkAccessProfileResponse() {{
            listNetworkAccessProfileResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListNetworkAccessProfileListNetworkAccessProfileResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListNetworkAccessProfileListNetworkAccessProfileResponse.class);
                res.listNetworkAccessProfileResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listNetworkAccessProfileNetwork - Retrieve a list of Network Access Profile resource's Network resource.
    **/
    public openapisdk.models.operations.ListNetworkAccessProfileNetworkResponse listNetworkAccessProfileNetwork(openapisdk.models.operations.ListNetworkAccessProfileNetworkRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListNetworkAccessProfileNetworkRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/NetworkAccessProfiles/{NetworkAccessProfileSid}/Networks", request.pathParams);
        
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

        openapisdk.models.operations.ListNetworkAccessProfileNetworkResponse res = new openapisdk.models.operations.ListNetworkAccessProfileNetworkResponse() {{
            listNetworkAccessProfileNetworkResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponse.class);
                res.listNetworkAccessProfileNetworkResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listSettingsUpdate - Retrieve a list of Settings Updates.
    **/
    public openapisdk.models.operations.ListSettingsUpdateResponse listSettingsUpdate(openapisdk.models.operations.ListSettingsUpdateRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListSettingsUpdateRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/SettingsUpdates");
        
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

        openapisdk.models.operations.ListSettingsUpdateResponse res = new openapisdk.models.operations.ListSettingsUpdateResponse() {{
            listSettingsUpdateResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListSettingsUpdateListSettingsUpdateResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListSettingsUpdateListSettingsUpdateResponse.class);
                res.listSettingsUpdateResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listSim - Retrieve a list of Super SIMs from your account.
    **/
    public openapisdk.models.operations.ListSimResponse listSim(openapisdk.models.operations.ListSimRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListSimRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Sims");
        
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

        openapisdk.models.operations.ListSimResponse res = new openapisdk.models.operations.ListSimResponse() {{
            listSimResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListSimListSimResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListSimListSimResponse.class);
                res.listSimResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listSimIpAddress - Retrieve a list of IP Addresses for the given Super SIM.
    **/
    public openapisdk.models.operations.ListSimIpAddressResponse listSimIpAddress(openapisdk.models.operations.ListSimIpAddressRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListSimIpAddressRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Sims/{SimSid}/IpAddresses", request.pathParams);
        
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

        openapisdk.models.operations.ListSimIpAddressResponse res = new openapisdk.models.operations.ListSimIpAddressResponse() {{
            listSimIpAddressResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListSimIpAddressListSimIpAddressResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListSimIpAddressListSimIpAddressResponse.class);
                res.listSimIpAddressResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listSmsCommand - Retrieve a list of SMS Commands from your account.
    **/
    public openapisdk.models.operations.ListSmsCommandResponse listSmsCommand(openapisdk.models.operations.ListSmsCommandRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListSmsCommandRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/SmsCommands");
        
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

        openapisdk.models.operations.ListSmsCommandResponse res = new openapisdk.models.operations.ListSmsCommandResponse() {{
            listSmsCommandResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListSmsCommandListSmsCommandResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListSmsCommandListSmsCommandResponse.class);
                res.listSmsCommandResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listUsageRecord - List UsageRecords
    **/
    public openapisdk.models.operations.ListUsageRecordResponse listUsageRecord(openapisdk.models.operations.ListUsageRecordRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListUsageRecordRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/UsageRecords");
        
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

        openapisdk.models.operations.ListUsageRecordResponse res = new openapisdk.models.operations.ListUsageRecordResponse() {{
            listUsageRecordResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListUsageRecordListUsageRecordResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListUsageRecordListUsageRecordResponse.class);
                res.listUsageRecordResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateFleet - Updates the given properties of a Super SIM Fleet instance from your account.
    **/
    public openapisdk.models.operations.UpdateFleetResponse updateFleet(openapisdk.models.operations.UpdateFleetRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateFleetRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Fleets/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateFleetResponse res = new openapisdk.models.operations.UpdateFleetResponse() {{
            supersimV1Fleet = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SupersimV1Fleet out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SupersimV1Fleet.class);
                res.supersimV1Fleet = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateNetworkAccessProfile - Updates the given properties of a Network Access Profile in your account.
    **/
    public openapisdk.models.operations.UpdateNetworkAccessProfileResponse updateNetworkAccessProfile(openapisdk.models.operations.UpdateNetworkAccessProfileRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateNetworkAccessProfileRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/NetworkAccessProfiles/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateNetworkAccessProfileResponse res = new openapisdk.models.operations.UpdateNetworkAccessProfileResponse() {{
            supersimV1NetworkAccessProfile = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SupersimV1NetworkAccessProfile out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SupersimV1NetworkAccessProfile.class);
                res.supersimV1NetworkAccessProfile = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateSim - Updates the given properties of a Super SIM instance from your account.
    **/
    public openapisdk.models.operations.UpdateSimResponse updateSim(openapisdk.models.operations.UpdateSimRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateSimRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Sims/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateSimResponse res = new openapisdk.models.operations.UpdateSimResponse() {{
            supersimV1Sim = null;
            supersimV1Sim = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SupersimV1Sim out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SupersimV1Sim.class);
                res.supersimV1Sim = out;
            }
        }
        else if (httpRes.statusCode() == 202) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SupersimV1Sim out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SupersimV1Sim.class);
                res.supersimV1Sim = out;
            }
        }

        return res;
    }
	
}