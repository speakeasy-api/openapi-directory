

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
		"https://taskrouter.twilio.com",
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
	
	
    public openapisdk.models.operations.CreateActivityResponse createActivity(openapisdk.models.operations.CreateActivityRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateActivityRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Workspaces/{WorkspaceSid}/Activities", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateActivityResponse res = new openapisdk.models.operations.CreateActivityResponse() {{
            taskrouterV1WorkspaceActivity = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TaskrouterV1WorkspaceActivity out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TaskrouterV1WorkspaceActivity.class);
                res.taskrouterV1WorkspaceActivity = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.CreateTaskResponse createTask(openapisdk.models.operations.CreateTaskRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateTaskRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Workspaces/{WorkspaceSid}/Tasks", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateTaskResponse res = new openapisdk.models.operations.CreateTaskResponse() {{
            taskrouterV1WorkspaceTask = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TaskrouterV1WorkspaceTask out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TaskrouterV1WorkspaceTask.class);
                res.taskrouterV1WorkspaceTask = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.CreateTaskChannelResponse createTaskChannel(openapisdk.models.operations.CreateTaskChannelRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateTaskChannelRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Workspaces/{WorkspaceSid}/TaskChannels", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateTaskChannelResponse res = new openapisdk.models.operations.CreateTaskChannelResponse() {{
            taskrouterV1WorkspaceTaskChannel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TaskrouterV1WorkspaceTaskChannel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TaskrouterV1WorkspaceTaskChannel.class);
                res.taskrouterV1WorkspaceTaskChannel = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.CreateTaskQueueResponse createTaskQueue(openapisdk.models.operations.CreateTaskQueueRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateTaskQueueRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Workspaces/{WorkspaceSid}/TaskQueues", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateTaskQueueResponse res = new openapisdk.models.operations.CreateTaskQueueResponse() {{
            taskrouterV1WorkspaceTaskQueue = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TaskrouterV1WorkspaceTaskQueue out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TaskrouterV1WorkspaceTaskQueue.class);
                res.taskrouterV1WorkspaceTaskQueue = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.CreateWorkerResponse createWorker(openapisdk.models.operations.CreateWorkerRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateWorkerRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Workspaces/{WorkspaceSid}/Workers", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateWorkerResponse res = new openapisdk.models.operations.CreateWorkerResponse() {{
            taskrouterV1WorkspaceWorker = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TaskrouterV1WorkspaceWorker out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TaskrouterV1WorkspaceWorker.class);
                res.taskrouterV1WorkspaceWorker = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.CreateWorkflowResponse createWorkflow(openapisdk.models.operations.CreateWorkflowRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateWorkflowRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Workspaces/{WorkspaceSid}/Workflows", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateWorkflowResponse res = new openapisdk.models.operations.CreateWorkflowResponse() {{
            taskrouterV1WorkspaceWorkflow = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TaskrouterV1WorkspaceWorkflow out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TaskrouterV1WorkspaceWorkflow.class);
                res.taskrouterV1WorkspaceWorkflow = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.CreateWorkspaceResponse createWorkspace(openapisdk.models.operations.CreateWorkspaceRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateWorkspaceRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Workspaces");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateWorkspaceResponse res = new openapisdk.models.operations.CreateWorkspaceResponse() {{
            taskrouterV1Workspace = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TaskrouterV1Workspace out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TaskrouterV1Workspace.class);
                res.taskrouterV1Workspace = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.DeleteActivityResponse deleteActivity(openapisdk.models.operations.DeleteActivityRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteActivityRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Workspaces/{WorkspaceSid}/Activities/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteActivityResponse res = new openapisdk.models.operations.DeleteActivityResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.DeleteTaskResponse deleteTask(openapisdk.models.operations.DeleteTaskRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteTaskRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Workspaces/{WorkspaceSid}/Tasks/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteTaskResponse res = new openapisdk.models.operations.DeleteTaskResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.DeleteTaskChannelResponse deleteTaskChannel(openapisdk.models.operations.DeleteTaskChannelRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteTaskChannelRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Workspaces/{WorkspaceSid}/TaskChannels/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteTaskChannelResponse res = new openapisdk.models.operations.DeleteTaskChannelResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.DeleteTaskQueueResponse deleteTaskQueue(openapisdk.models.operations.DeleteTaskQueueRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteTaskQueueRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Workspaces/{WorkspaceSid}/TaskQueues/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteTaskQueueResponse res = new openapisdk.models.operations.DeleteTaskQueueResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.DeleteWorkerResponse deleteWorker(openapisdk.models.operations.DeleteWorkerRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteWorkerRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Workspaces/{WorkspaceSid}/Workers/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteWorkerResponse res = new openapisdk.models.operations.DeleteWorkerResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.DeleteWorkflowResponse deleteWorkflow(openapisdk.models.operations.DeleteWorkflowRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteWorkflowRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Workspaces/{WorkspaceSid}/Workflows/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteWorkflowResponse res = new openapisdk.models.operations.DeleteWorkflowResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.DeleteWorkspaceResponse deleteWorkspace(openapisdk.models.operations.DeleteWorkspaceRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteWorkspaceRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Workspaces/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteWorkspaceResponse res = new openapisdk.models.operations.DeleteWorkspaceResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchActivityResponse fetchActivity(openapisdk.models.operations.FetchActivityRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchActivityRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Workspaces/{WorkspaceSid}/Activities/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchActivityResponse res = new openapisdk.models.operations.FetchActivityResponse() {{
            taskrouterV1WorkspaceActivity = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TaskrouterV1WorkspaceActivity out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TaskrouterV1WorkspaceActivity.class);
                res.taskrouterV1WorkspaceActivity = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchEventResponse fetchEvent(openapisdk.models.operations.FetchEventRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchEventRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Workspaces/{WorkspaceSid}/Events/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchEventResponse res = new openapisdk.models.operations.FetchEventResponse() {{
            taskrouterV1WorkspaceEvent = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TaskrouterV1WorkspaceEvent out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TaskrouterV1WorkspaceEvent.class);
                res.taskrouterV1WorkspaceEvent = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchTaskResponse fetchTask(openapisdk.models.operations.FetchTaskRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchTaskRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Workspaces/{WorkspaceSid}/Tasks/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchTaskResponse res = new openapisdk.models.operations.FetchTaskResponse() {{
            taskrouterV1WorkspaceTask = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TaskrouterV1WorkspaceTask out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TaskrouterV1WorkspaceTask.class);
                res.taskrouterV1WorkspaceTask = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchTaskChannelResponse fetchTaskChannel(openapisdk.models.operations.FetchTaskChannelRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchTaskChannelRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Workspaces/{WorkspaceSid}/TaskChannels/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchTaskChannelResponse res = new openapisdk.models.operations.FetchTaskChannelResponse() {{
            taskrouterV1WorkspaceTaskChannel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TaskrouterV1WorkspaceTaskChannel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TaskrouterV1WorkspaceTaskChannel.class);
                res.taskrouterV1WorkspaceTaskChannel = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchTaskQueueResponse fetchTaskQueue(openapisdk.models.operations.FetchTaskQueueRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchTaskQueueRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Workspaces/{WorkspaceSid}/TaskQueues/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchTaskQueueResponse res = new openapisdk.models.operations.FetchTaskQueueResponse() {{
            taskrouterV1WorkspaceTaskQueue = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TaskrouterV1WorkspaceTaskQueue out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TaskrouterV1WorkspaceTaskQueue.class);
                res.taskrouterV1WorkspaceTaskQueue = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchTaskQueueCumulativeStatisticsResponse fetchTaskQueueCumulativeStatistics(openapisdk.models.operations.FetchTaskQueueCumulativeStatisticsRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchTaskQueueCumulativeStatisticsRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Workspaces/{WorkspaceSid}/TaskQueues/{TaskQueueSid}/CumulativeStatistics", request.pathParams);
        
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

        openapisdk.models.operations.FetchTaskQueueCumulativeStatisticsResponse res = new openapisdk.models.operations.FetchTaskQueueCumulativeStatisticsResponse() {{
            taskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics.class);
                res.taskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchTaskQueueRealTimeStatisticsResponse fetchTaskQueueRealTimeStatistics(openapisdk.models.operations.FetchTaskQueueRealTimeStatisticsRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchTaskQueueRealTimeStatisticsRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Workspaces/{WorkspaceSid}/TaskQueues/{TaskQueueSid}/RealTimeStatistics", request.pathParams);
        
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

        openapisdk.models.operations.FetchTaskQueueRealTimeStatisticsResponse res = new openapisdk.models.operations.FetchTaskQueueRealTimeStatisticsResponse() {{
            taskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics.class);
                res.taskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchTaskQueueStatisticsResponse fetchTaskQueueStatistics(openapisdk.models.operations.FetchTaskQueueStatisticsRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchTaskQueueStatisticsRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Workspaces/{WorkspaceSid}/TaskQueues/{TaskQueueSid}/Statistics", request.pathParams);
        
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

        openapisdk.models.operations.FetchTaskQueueStatisticsResponse res = new openapisdk.models.operations.FetchTaskQueueStatisticsResponse() {{
            taskrouterV1WorkspaceTaskQueueTaskQueueStatistics = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TaskrouterV1WorkspaceTaskQueueTaskQueueStatistics out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TaskrouterV1WorkspaceTaskQueueTaskQueueStatistics.class);
                res.taskrouterV1WorkspaceTaskQueueTaskQueueStatistics = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchTaskReservationResponse fetchTaskReservation(openapisdk.models.operations.FetchTaskReservationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchTaskReservationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Workspaces/{WorkspaceSid}/Tasks/{TaskSid}/Reservations/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchTaskReservationResponse res = new openapisdk.models.operations.FetchTaskReservationResponse() {{
            taskrouterV1WorkspaceTaskTaskReservation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TaskrouterV1WorkspaceTaskTaskReservation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TaskrouterV1WorkspaceTaskTaskReservation.class);
                res.taskrouterV1WorkspaceTaskTaskReservation = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchWorkerResponse fetchWorker(openapisdk.models.operations.FetchWorkerRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchWorkerRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Workspaces/{WorkspaceSid}/Workers/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchWorkerResponse res = new openapisdk.models.operations.FetchWorkerResponse() {{
            taskrouterV1WorkspaceWorker = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TaskrouterV1WorkspaceWorker out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TaskrouterV1WorkspaceWorker.class);
                res.taskrouterV1WorkspaceWorker = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchWorkerChannelResponse fetchWorkerChannel(openapisdk.models.operations.FetchWorkerChannelRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchWorkerChannelRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Channels/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchWorkerChannelResponse res = new openapisdk.models.operations.FetchWorkerChannelResponse() {{
            taskrouterV1WorkspaceWorkerWorkerChannel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TaskrouterV1WorkspaceWorkerWorkerChannel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TaskrouterV1WorkspaceWorkerWorkerChannel.class);
                res.taskrouterV1WorkspaceWorkerWorkerChannel = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchWorkerInstanceStatisticsResponse fetchWorkerInstanceStatistics(openapisdk.models.operations.FetchWorkerInstanceStatisticsRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchWorkerInstanceStatisticsRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Statistics", request.pathParams);
        
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

        openapisdk.models.operations.FetchWorkerInstanceStatisticsResponse res = new openapisdk.models.operations.FetchWorkerInstanceStatisticsResponse() {{
            taskrouterV1WorkspaceWorkerWorkerInstanceStatistics = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TaskrouterV1WorkspaceWorkerWorkerInstanceStatistics out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TaskrouterV1WorkspaceWorkerWorkerInstanceStatistics.class);
                res.taskrouterV1WorkspaceWorkerWorkerInstanceStatistics = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchWorkerReservationResponse fetchWorkerReservation(openapisdk.models.operations.FetchWorkerReservationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchWorkerReservationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Reservations/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchWorkerReservationResponse res = new openapisdk.models.operations.FetchWorkerReservationResponse() {{
            taskrouterV1WorkspaceWorkerWorkerReservation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TaskrouterV1WorkspaceWorkerWorkerReservation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TaskrouterV1WorkspaceWorkerWorkerReservation.class);
                res.taskrouterV1WorkspaceWorkerWorkerReservation = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchWorkerStatisticsResponse fetchWorkerStatistics(openapisdk.models.operations.FetchWorkerStatisticsRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchWorkerStatisticsRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Workspaces/{WorkspaceSid}/Workers/Statistics", request.pathParams);
        
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

        openapisdk.models.operations.FetchWorkerStatisticsResponse res = new openapisdk.models.operations.FetchWorkerStatisticsResponse() {{
            taskrouterV1WorkspaceWorkerWorkerStatistics = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TaskrouterV1WorkspaceWorkerWorkerStatistics out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TaskrouterV1WorkspaceWorkerWorkerStatistics.class);
                res.taskrouterV1WorkspaceWorkerWorkerStatistics = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchWorkersCumulativeStatisticsResponse fetchWorkersCumulativeStatistics(openapisdk.models.operations.FetchWorkersCumulativeStatisticsRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchWorkersCumulativeStatisticsRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Workspaces/{WorkspaceSid}/Workers/CumulativeStatistics", request.pathParams);
        
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

        openapisdk.models.operations.FetchWorkersCumulativeStatisticsResponse res = new openapisdk.models.operations.FetchWorkersCumulativeStatisticsResponse() {{
            taskrouterV1WorkspaceWorkerWorkersCumulativeStatistics = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics.class);
                res.taskrouterV1WorkspaceWorkerWorkersCumulativeStatistics = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchWorkersRealTimeStatisticsResponse fetchWorkersRealTimeStatistics(openapisdk.models.operations.FetchWorkersRealTimeStatisticsRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchWorkersRealTimeStatisticsRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Workspaces/{WorkspaceSid}/Workers/RealTimeStatistics", request.pathParams);
        
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

        openapisdk.models.operations.FetchWorkersRealTimeStatisticsResponse res = new openapisdk.models.operations.FetchWorkersRealTimeStatisticsResponse() {{
            taskrouterV1WorkspaceWorkerWorkersRealTimeStatistics = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TaskrouterV1WorkspaceWorkerWorkersRealTimeStatistics out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TaskrouterV1WorkspaceWorkerWorkersRealTimeStatistics.class);
                res.taskrouterV1WorkspaceWorkerWorkersRealTimeStatistics = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchWorkflowResponse fetchWorkflow(openapisdk.models.operations.FetchWorkflowRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchWorkflowRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Workspaces/{WorkspaceSid}/Workflows/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchWorkflowResponse res = new openapisdk.models.operations.FetchWorkflowResponse() {{
            taskrouterV1WorkspaceWorkflow = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TaskrouterV1WorkspaceWorkflow out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TaskrouterV1WorkspaceWorkflow.class);
                res.taskrouterV1WorkspaceWorkflow = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchWorkflowCumulativeStatisticsResponse fetchWorkflowCumulativeStatistics(openapisdk.models.operations.FetchWorkflowCumulativeStatisticsRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchWorkflowCumulativeStatisticsRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Workspaces/{WorkspaceSid}/Workflows/{WorkflowSid}/CumulativeStatistics", request.pathParams);
        
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

        openapisdk.models.operations.FetchWorkflowCumulativeStatisticsResponse res = new openapisdk.models.operations.FetchWorkflowCumulativeStatisticsResponse() {{
            taskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TaskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TaskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics.class);
                res.taskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchWorkflowRealTimeStatisticsResponse fetchWorkflowRealTimeStatistics(openapisdk.models.operations.FetchWorkflowRealTimeStatisticsRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchWorkflowRealTimeStatisticsRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Workspaces/{WorkspaceSid}/Workflows/{WorkflowSid}/RealTimeStatistics", request.pathParams);
        
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

        openapisdk.models.operations.FetchWorkflowRealTimeStatisticsResponse res = new openapisdk.models.operations.FetchWorkflowRealTimeStatisticsResponse() {{
            taskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TaskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TaskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics.class);
                res.taskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchWorkflowStatisticsResponse fetchWorkflowStatistics(openapisdk.models.operations.FetchWorkflowStatisticsRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchWorkflowStatisticsRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Workspaces/{WorkspaceSid}/Workflows/{WorkflowSid}/Statistics", request.pathParams);
        
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

        openapisdk.models.operations.FetchWorkflowStatisticsResponse res = new openapisdk.models.operations.FetchWorkflowStatisticsResponse() {{
            taskrouterV1WorkspaceWorkflowWorkflowStatistics = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TaskrouterV1WorkspaceWorkflowWorkflowStatistics out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TaskrouterV1WorkspaceWorkflowWorkflowStatistics.class);
                res.taskrouterV1WorkspaceWorkflowWorkflowStatistics = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchWorkspaceResponse fetchWorkspace(openapisdk.models.operations.FetchWorkspaceRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchWorkspaceRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Workspaces/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchWorkspaceResponse res = new openapisdk.models.operations.FetchWorkspaceResponse() {{
            taskrouterV1Workspace = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TaskrouterV1Workspace out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TaskrouterV1Workspace.class);
                res.taskrouterV1Workspace = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchWorkspaceCumulativeStatisticsResponse fetchWorkspaceCumulativeStatistics(openapisdk.models.operations.FetchWorkspaceCumulativeStatisticsRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchWorkspaceCumulativeStatisticsRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Workspaces/{WorkspaceSid}/CumulativeStatistics", request.pathParams);
        
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

        openapisdk.models.operations.FetchWorkspaceCumulativeStatisticsResponse res = new openapisdk.models.operations.FetchWorkspaceCumulativeStatisticsResponse() {{
            taskrouterV1WorkspaceWorkspaceCumulativeStatistics = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TaskrouterV1WorkspaceWorkspaceCumulativeStatistics out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TaskrouterV1WorkspaceWorkspaceCumulativeStatistics.class);
                res.taskrouterV1WorkspaceWorkspaceCumulativeStatistics = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchWorkspaceRealTimeStatisticsResponse fetchWorkspaceRealTimeStatistics(openapisdk.models.operations.FetchWorkspaceRealTimeStatisticsRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchWorkspaceRealTimeStatisticsRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Workspaces/{WorkspaceSid}/RealTimeStatistics", request.pathParams);
        
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

        openapisdk.models.operations.FetchWorkspaceRealTimeStatisticsResponse res = new openapisdk.models.operations.FetchWorkspaceRealTimeStatisticsResponse() {{
            taskrouterV1WorkspaceWorkspaceRealTimeStatistics = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TaskrouterV1WorkspaceWorkspaceRealTimeStatistics out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TaskrouterV1WorkspaceWorkspaceRealTimeStatistics.class);
                res.taskrouterV1WorkspaceWorkspaceRealTimeStatistics = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchWorkspaceStatisticsResponse fetchWorkspaceStatistics(openapisdk.models.operations.FetchWorkspaceStatisticsRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchWorkspaceStatisticsRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Workspaces/{WorkspaceSid}/Statistics", request.pathParams);
        
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

        openapisdk.models.operations.FetchWorkspaceStatisticsResponse res = new openapisdk.models.operations.FetchWorkspaceStatisticsResponse() {{
            taskrouterV1WorkspaceWorkspaceStatistics = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TaskrouterV1WorkspaceWorkspaceStatistics out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TaskrouterV1WorkspaceWorkspaceStatistics.class);
                res.taskrouterV1WorkspaceWorkspaceStatistics = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListActivityResponse listActivity(openapisdk.models.operations.ListActivityRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListActivityRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Workspaces/{WorkspaceSid}/Activities", request.pathParams);
        
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

        openapisdk.models.operations.ListActivityResponse res = new openapisdk.models.operations.ListActivityResponse() {{
            listActivityResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListActivityListActivityResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListActivityListActivityResponse.class);
                res.listActivityResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListEventResponse listEvent(openapisdk.models.operations.ListEventRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListEventRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Workspaces/{WorkspaceSid}/Events", request.pathParams);
        
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

        openapisdk.models.operations.ListEventResponse res = new openapisdk.models.operations.ListEventResponse() {{
            listEventResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListEventListEventResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListEventListEventResponse.class);
                res.listEventResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListTaskResponse listTask(openapisdk.models.operations.ListTaskRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListTaskRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Workspaces/{WorkspaceSid}/Tasks", request.pathParams);
        
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

        openapisdk.models.operations.ListTaskResponse res = new openapisdk.models.operations.ListTaskResponse() {{
            listTaskResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListTaskListTaskResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListTaskListTaskResponse.class);
                res.listTaskResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListTaskChannelResponse listTaskChannel(openapisdk.models.operations.ListTaskChannelRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListTaskChannelRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Workspaces/{WorkspaceSid}/TaskChannels", request.pathParams);
        
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

        openapisdk.models.operations.ListTaskChannelResponse res = new openapisdk.models.operations.ListTaskChannelResponse() {{
            listTaskChannelResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListTaskChannelListTaskChannelResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListTaskChannelListTaskChannelResponse.class);
                res.listTaskChannelResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListTaskQueueResponse listTaskQueue(openapisdk.models.operations.ListTaskQueueRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListTaskQueueRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Workspaces/{WorkspaceSid}/TaskQueues", request.pathParams);
        
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

        openapisdk.models.operations.ListTaskQueueResponse res = new openapisdk.models.operations.ListTaskQueueResponse() {{
            listTaskQueueResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListTaskQueueListTaskQueueResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListTaskQueueListTaskQueueResponse.class);
                res.listTaskQueueResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListTaskQueuesStatisticsResponse listTaskQueuesStatistics(openapisdk.models.operations.ListTaskQueuesStatisticsRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListTaskQueuesStatisticsRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Workspaces/{WorkspaceSid}/TaskQueues/Statistics", request.pathParams);
        
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

        openapisdk.models.operations.ListTaskQueuesStatisticsResponse res = new openapisdk.models.operations.ListTaskQueuesStatisticsResponse() {{
            listTaskQueuesStatisticsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListTaskQueuesStatisticsListTaskQueuesStatisticsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListTaskQueuesStatisticsListTaskQueuesStatisticsResponse.class);
                res.listTaskQueuesStatisticsResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListTaskReservationResponse listTaskReservation(openapisdk.models.operations.ListTaskReservationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListTaskReservationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Workspaces/{WorkspaceSid}/Tasks/{TaskSid}/Reservations", request.pathParams);
        
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

        openapisdk.models.operations.ListTaskReservationResponse res = new openapisdk.models.operations.ListTaskReservationResponse() {{
            listTaskReservationResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListTaskReservationListTaskReservationResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListTaskReservationListTaskReservationResponse.class);
                res.listTaskReservationResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListWorkerResponse listWorker(openapisdk.models.operations.ListWorkerRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListWorkerRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Workspaces/{WorkspaceSid}/Workers", request.pathParams);
        
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

        openapisdk.models.operations.ListWorkerResponse res = new openapisdk.models.operations.ListWorkerResponse() {{
            listWorkerResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListWorkerListWorkerResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListWorkerListWorkerResponse.class);
                res.listWorkerResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListWorkerChannelResponse listWorkerChannel(openapisdk.models.operations.ListWorkerChannelRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListWorkerChannelRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Channels", request.pathParams);
        
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

        openapisdk.models.operations.ListWorkerChannelResponse res = new openapisdk.models.operations.ListWorkerChannelResponse() {{
            listWorkerChannelResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListWorkerChannelListWorkerChannelResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListWorkerChannelListWorkerChannelResponse.class);
                res.listWorkerChannelResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListWorkerReservationResponse listWorkerReservation(openapisdk.models.operations.ListWorkerReservationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListWorkerReservationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Reservations", request.pathParams);
        
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

        openapisdk.models.operations.ListWorkerReservationResponse res = new openapisdk.models.operations.ListWorkerReservationResponse() {{
            listWorkerReservationResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListWorkerReservationListWorkerReservationResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListWorkerReservationListWorkerReservationResponse.class);
                res.listWorkerReservationResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListWorkflowResponse listWorkflow(openapisdk.models.operations.ListWorkflowRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListWorkflowRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Workspaces/{WorkspaceSid}/Workflows", request.pathParams);
        
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

        openapisdk.models.operations.ListWorkflowResponse res = new openapisdk.models.operations.ListWorkflowResponse() {{
            listWorkflowResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListWorkflowListWorkflowResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListWorkflowListWorkflowResponse.class);
                res.listWorkflowResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListWorkspaceResponse listWorkspace(openapisdk.models.operations.ListWorkspaceRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListWorkspaceRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Workspaces");
        
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

        openapisdk.models.operations.ListWorkspaceResponse res = new openapisdk.models.operations.ListWorkspaceResponse() {{
            listWorkspaceResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListWorkspaceListWorkspaceResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListWorkspaceListWorkspaceResponse.class);
                res.listWorkspaceResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.UpdateActivityResponse updateActivity(openapisdk.models.operations.UpdateActivityRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateActivityRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Workspaces/{WorkspaceSid}/Activities/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateActivityResponse res = new openapisdk.models.operations.UpdateActivityResponse() {{
            taskrouterV1WorkspaceActivity = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TaskrouterV1WorkspaceActivity out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TaskrouterV1WorkspaceActivity.class);
                res.taskrouterV1WorkspaceActivity = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.UpdateTaskResponse updateTask(openapisdk.models.operations.UpdateTaskRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateTaskRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Workspaces/{WorkspaceSid}/Tasks/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateTaskResponse res = new openapisdk.models.operations.UpdateTaskResponse() {{
            taskrouterV1WorkspaceTask = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TaskrouterV1WorkspaceTask out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TaskrouterV1WorkspaceTask.class);
                res.taskrouterV1WorkspaceTask = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.UpdateTaskChannelResponse updateTaskChannel(openapisdk.models.operations.UpdateTaskChannelRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateTaskChannelRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Workspaces/{WorkspaceSid}/TaskChannels/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateTaskChannelResponse res = new openapisdk.models.operations.UpdateTaskChannelResponse() {{
            taskrouterV1WorkspaceTaskChannel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TaskrouterV1WorkspaceTaskChannel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TaskrouterV1WorkspaceTaskChannel.class);
                res.taskrouterV1WorkspaceTaskChannel = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.UpdateTaskQueueResponse updateTaskQueue(openapisdk.models.operations.UpdateTaskQueueRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateTaskQueueRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Workspaces/{WorkspaceSid}/TaskQueues/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateTaskQueueResponse res = new openapisdk.models.operations.UpdateTaskQueueResponse() {{
            taskrouterV1WorkspaceTaskQueue = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TaskrouterV1WorkspaceTaskQueue out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TaskrouterV1WorkspaceTaskQueue.class);
                res.taskrouterV1WorkspaceTaskQueue = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.UpdateTaskReservationResponse updateTaskReservation(openapisdk.models.operations.UpdateTaskReservationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateTaskReservationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Workspaces/{WorkspaceSid}/Tasks/{TaskSid}/Reservations/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateTaskReservationResponse res = new openapisdk.models.operations.UpdateTaskReservationResponse() {{
            taskrouterV1WorkspaceTaskTaskReservation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TaskrouterV1WorkspaceTaskTaskReservation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TaskrouterV1WorkspaceTaskTaskReservation.class);
                res.taskrouterV1WorkspaceTaskTaskReservation = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.UpdateWorkerResponse updateWorker(openapisdk.models.operations.UpdateWorkerRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateWorkerRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Workspaces/{WorkspaceSid}/Workers/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateWorkerResponse res = new openapisdk.models.operations.UpdateWorkerResponse() {{
            taskrouterV1WorkspaceWorker = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TaskrouterV1WorkspaceWorker out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TaskrouterV1WorkspaceWorker.class);
                res.taskrouterV1WorkspaceWorker = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.UpdateWorkerChannelResponse updateWorkerChannel(openapisdk.models.operations.UpdateWorkerChannelRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateWorkerChannelRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Channels/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateWorkerChannelResponse res = new openapisdk.models.operations.UpdateWorkerChannelResponse() {{
            taskrouterV1WorkspaceWorkerWorkerChannel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TaskrouterV1WorkspaceWorkerWorkerChannel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TaskrouterV1WorkspaceWorkerWorkerChannel.class);
                res.taskrouterV1WorkspaceWorkerWorkerChannel = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.UpdateWorkerReservationResponse updateWorkerReservation(openapisdk.models.operations.UpdateWorkerReservationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateWorkerReservationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Reservations/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateWorkerReservationResponse res = new openapisdk.models.operations.UpdateWorkerReservationResponse() {{
            taskrouterV1WorkspaceWorkerWorkerReservation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TaskrouterV1WorkspaceWorkerWorkerReservation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TaskrouterV1WorkspaceWorkerWorkerReservation.class);
                res.taskrouterV1WorkspaceWorkerWorkerReservation = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.UpdateWorkflowResponse updateWorkflow(openapisdk.models.operations.UpdateWorkflowRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateWorkflowRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Workspaces/{WorkspaceSid}/Workflows/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateWorkflowResponse res = new openapisdk.models.operations.UpdateWorkflowResponse() {{
            taskrouterV1WorkspaceWorkflow = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TaskrouterV1WorkspaceWorkflow out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TaskrouterV1WorkspaceWorkflow.class);
                res.taskrouterV1WorkspaceWorkflow = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.UpdateWorkspaceResponse updateWorkspace(openapisdk.models.operations.UpdateWorkspaceRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateWorkspaceRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Workspaces/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateWorkspaceResponse res = new openapisdk.models.operations.UpdateWorkspaceResponse() {{
            taskrouterV1Workspace = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TaskrouterV1Workspace out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TaskrouterV1Workspace.class);
                res.taskrouterV1Workspace = out;
            }
        }

        return res;
    }
	
}