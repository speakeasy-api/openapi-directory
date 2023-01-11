

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
		"https://studio.twilio.com",
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
     * createEngagement - Triggers a new Engagement for the Flow
    **/
    public openapisdk.models.operations.CreateEngagementResponse createEngagement(openapisdk.models.operations.CreateEngagementRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateEngagementRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Flows/{FlowSid}/Engagements", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateEngagementResponse res = new openapisdk.models.operations.CreateEngagementResponse() {{
            studioV1FlowEngagement = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.StudioV1FlowEngagement out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.StudioV1FlowEngagement.class);
                res.studioV1FlowEngagement = out;
            }
        }

        return res;
    }
	
	
    /**
     * createExecution - Triggers a new Execution for the Flow
    **/
    public openapisdk.models.operations.CreateExecutionResponse createExecution(openapisdk.models.operations.CreateExecutionRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateExecutionRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Flows/{FlowSid}/Executions", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateExecutionResponse res = new openapisdk.models.operations.CreateExecutionResponse() {{
            studioV1FlowExecution = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.StudioV1FlowExecution out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.StudioV1FlowExecution.class);
                res.studioV1FlowExecution = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteEngagement - Delete this Engagement and all Steps relating to it.
    **/
    public openapisdk.models.operations.DeleteEngagementResponse deleteEngagement(openapisdk.models.operations.DeleteEngagementRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteEngagementRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Flows/{FlowSid}/Engagements/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteEngagementResponse res = new openapisdk.models.operations.DeleteEngagementResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteExecution - Delete the Execution and all Steps relating to it.
    **/
    public openapisdk.models.operations.DeleteExecutionResponse deleteExecution(openapisdk.models.operations.DeleteExecutionRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteExecutionRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Flows/{FlowSid}/Executions/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteExecutionResponse res = new openapisdk.models.operations.DeleteExecutionResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteFlow - Delete a specific Flow.
    **/
    public openapisdk.models.operations.DeleteFlowResponse deleteFlow(openapisdk.models.operations.DeleteFlowRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteFlowRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Flows/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteFlowResponse res = new openapisdk.models.operations.DeleteFlowResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * fetchEngagement - Retrieve an Engagement
    **/
    public openapisdk.models.operations.FetchEngagementResponse fetchEngagement(openapisdk.models.operations.FetchEngagementRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchEngagementRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Flows/{FlowSid}/Engagements/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchEngagementResponse res = new openapisdk.models.operations.FetchEngagementResponse() {{
            studioV1FlowEngagement = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.StudioV1FlowEngagement out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.StudioV1FlowEngagement.class);
                res.studioV1FlowEngagement = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchEngagementContext - Retrieve the most recent context for an Engagement.
    **/
    public openapisdk.models.operations.FetchEngagementContextResponse fetchEngagementContext(openapisdk.models.operations.FetchEngagementContextRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchEngagementContextRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Flows/{FlowSid}/Engagements/{EngagementSid}/Context", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchEngagementContextResponse res = new openapisdk.models.operations.FetchEngagementContextResponse() {{
            studioV1FlowEngagementEngagementContext = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.StudioV1FlowEngagementEngagementContext out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.StudioV1FlowEngagementEngagementContext.class);
                res.studioV1FlowEngagementEngagementContext = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchExecution - Retrieve an Execution
    **/
    public openapisdk.models.operations.FetchExecutionResponse fetchExecution(openapisdk.models.operations.FetchExecutionRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchExecutionRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Flows/{FlowSid}/Executions/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchExecutionResponse res = new openapisdk.models.operations.FetchExecutionResponse() {{
            studioV1FlowExecution = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.StudioV1FlowExecution out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.StudioV1FlowExecution.class);
                res.studioV1FlowExecution = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchExecutionContext - Retrieve the most recent context for an Execution.
    **/
    public openapisdk.models.operations.FetchExecutionContextResponse fetchExecutionContext(openapisdk.models.operations.FetchExecutionContextRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchExecutionContextRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Flows/{FlowSid}/Executions/{ExecutionSid}/Context", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchExecutionContextResponse res = new openapisdk.models.operations.FetchExecutionContextResponse() {{
            studioV1FlowExecutionExecutionContext = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.StudioV1FlowExecutionExecutionContext out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.StudioV1FlowExecutionExecutionContext.class);
                res.studioV1FlowExecutionExecutionContext = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchExecutionStep - Retrieve a Step.
    **/
    public openapisdk.models.operations.FetchExecutionStepResponse fetchExecutionStep(openapisdk.models.operations.FetchExecutionStepRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchExecutionStepRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Flows/{FlowSid}/Executions/{ExecutionSid}/Steps/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchExecutionStepResponse res = new openapisdk.models.operations.FetchExecutionStepResponse() {{
            studioV1FlowExecutionExecutionStep = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.StudioV1FlowExecutionExecutionStep out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.StudioV1FlowExecutionExecutionStep.class);
                res.studioV1FlowExecutionExecutionStep = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchExecutionStepContext - Retrieve the context for an Execution Step.
    **/
    public openapisdk.models.operations.FetchExecutionStepContextResponse fetchExecutionStepContext(openapisdk.models.operations.FetchExecutionStepContextRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchExecutionStepContextRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Flows/{FlowSid}/Executions/{ExecutionSid}/Steps/{StepSid}/Context", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchExecutionStepContextResponse res = new openapisdk.models.operations.FetchExecutionStepContextResponse() {{
            studioV1FlowExecutionExecutionStepExecutionStepContext = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.StudioV1FlowExecutionExecutionStepExecutionStepContext out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.StudioV1FlowExecutionExecutionStepExecutionStepContext.class);
                res.studioV1FlowExecutionExecutionStepExecutionStepContext = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchFlow - Retrieve a specific Flow.
    **/
    public openapisdk.models.operations.FetchFlowResponse fetchFlow(openapisdk.models.operations.FetchFlowRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchFlowRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Flows/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchFlowResponse res = new openapisdk.models.operations.FetchFlowResponse() {{
            studioV1Flow = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.StudioV1Flow out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.StudioV1Flow.class);
                res.studioV1Flow = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchStep - Retrieve a Step.
    **/
    public openapisdk.models.operations.FetchStepResponse fetchStep(openapisdk.models.operations.FetchStepRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchStepRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Flows/{FlowSid}/Engagements/{EngagementSid}/Steps/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchStepResponse res = new openapisdk.models.operations.FetchStepResponse() {{
            studioV1FlowEngagementStep = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.StudioV1FlowEngagementStep out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.StudioV1FlowEngagementStep.class);
                res.studioV1FlowEngagementStep = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchStepContext - Retrieve the context for an Engagement Step.
    **/
    public openapisdk.models.operations.FetchStepContextResponse fetchStepContext(openapisdk.models.operations.FetchStepContextRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchStepContextRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Flows/{FlowSid}/Engagements/{EngagementSid}/Steps/{StepSid}/Context", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchStepContextResponse res = new openapisdk.models.operations.FetchStepContextResponse() {{
            studioV1FlowEngagementStepStepContext = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.StudioV1FlowEngagementStepStepContext out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.StudioV1FlowEngagementStepStepContext.class);
                res.studioV1FlowEngagementStepStepContext = out;
            }
        }

        return res;
    }
	
	
    /**
     * listEngagement - Retrieve a list of all Engagements for the Flow.
    **/
    public openapisdk.models.operations.ListEngagementResponse listEngagement(openapisdk.models.operations.ListEngagementRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListEngagementRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Flows/{FlowSid}/Engagements", request.pathParams);
        
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

        openapisdk.models.operations.ListEngagementResponse res = new openapisdk.models.operations.ListEngagementResponse() {{
            listEngagementResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListEngagementListEngagementResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListEngagementListEngagementResponse.class);
                res.listEngagementResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listExecution - Retrieve a list of all Executions for the Flow.
    **/
    public openapisdk.models.operations.ListExecutionResponse listExecution(openapisdk.models.operations.ListExecutionRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListExecutionRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Flows/{FlowSid}/Executions", request.pathParams);
        
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

        openapisdk.models.operations.ListExecutionResponse res = new openapisdk.models.operations.ListExecutionResponse() {{
            listExecutionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListExecutionListExecutionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListExecutionListExecutionResponse.class);
                res.listExecutionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listExecutionStep - Retrieve a list of all Steps for an Execution.
    **/
    public openapisdk.models.operations.ListExecutionStepResponse listExecutionStep(openapisdk.models.operations.ListExecutionStepRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListExecutionStepRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Flows/{FlowSid}/Executions/{ExecutionSid}/Steps", request.pathParams);
        
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

        openapisdk.models.operations.ListExecutionStepResponse res = new openapisdk.models.operations.ListExecutionStepResponse() {{
            listExecutionStepResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListExecutionStepListExecutionStepResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListExecutionStepListExecutionStepResponse.class);
                res.listExecutionStepResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listFlow - Retrieve a list of all Flows.
    **/
    public openapisdk.models.operations.ListFlowResponse listFlow(openapisdk.models.operations.ListFlowRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListFlowRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Flows");
        
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

        openapisdk.models.operations.ListFlowResponse res = new openapisdk.models.operations.ListFlowResponse() {{
            listFlowResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListFlowListFlowResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListFlowListFlowResponse.class);
                res.listFlowResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listStep - Retrieve a list of all Steps for an Engagement.
    **/
    public openapisdk.models.operations.ListStepResponse listStep(openapisdk.models.operations.ListStepRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListStepRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Flows/{FlowSid}/Engagements/{EngagementSid}/Steps", request.pathParams);
        
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

        openapisdk.models.operations.ListStepResponse res = new openapisdk.models.operations.ListStepResponse() {{
            listStepResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListStepListStepResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListStepListStepResponse.class);
                res.listStepResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateExecution - Update the status of an Execution to `ended`.
    **/
    public openapisdk.models.operations.UpdateExecutionResponse updateExecution(openapisdk.models.operations.UpdateExecutionRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateExecutionRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Flows/{FlowSid}/Executions/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateExecutionResponse res = new openapisdk.models.operations.UpdateExecutionResponse() {{
            studioV1FlowExecution = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.StudioV1FlowExecution out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.StudioV1FlowExecution.class);
                res.studioV1FlowExecution = out;
            }
        }

        return res;
    }
	
}