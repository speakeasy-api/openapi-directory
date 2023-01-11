package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Projects {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Projects(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * workflowexecutionsProjectsLocationsWorkflowsExecutionsCancel - Cancels an execution of the given name.
    **/
    public openapisdk.models.operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelResponse workflowexecutionsProjectsLocationsWorkflowsExecutionsCancel(openapisdk.models.operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta/{name}:cancel", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelResponse res = new openapisdk.models.operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelResponse() {{
            execution = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Execution out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Execution.class);
                res.execution = out;
            }
        }

        return res;
    }
	
	
    /**
     * workflowexecutionsProjectsLocationsWorkflowsExecutionsCreate - Creates a new execution using the latest revision of the given workflow.
    **/
    public openapisdk.models.operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreateResponse workflowexecutionsProjectsLocationsWorkflowsExecutionsCreate(openapisdk.models.operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta/{parent}/executions", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreateResponse res = new openapisdk.models.operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreateResponse() {{
            execution = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Execution out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Execution.class);
                res.execution = out;
            }
        }

        return res;
    }
	
	
    /**
     * workflowexecutionsProjectsLocationsWorkflowsExecutionsGet - Returns an execution of the given name.
    **/
    public openapisdk.models.operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetResponse workflowexecutionsProjectsLocationsWorkflowsExecutionsGet(openapisdk.models.operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta/{name}", request.pathParams);
        
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

        openapisdk.models.operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetResponse res = new openapisdk.models.operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetResponse() {{
            execution = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Execution out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Execution.class);
                res.execution = out;
            }
        }

        return res;
    }
	
	
    /**
     * workflowexecutionsProjectsLocationsWorkflowsExecutionsList - Returns a list of executions which belong to the workflow with the given name. The method returns executions of all workflow revisions. Returned executions are ordered by their start time (newest first).
    **/
    public openapisdk.models.operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListResponse workflowexecutionsProjectsLocationsWorkflowsExecutionsList(openapisdk.models.operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta/{parent}/executions", request.pathParams);
        
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

        openapisdk.models.operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListResponse res = new openapisdk.models.operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListResponse() {{
            listExecutionsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListExecutionsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListExecutionsResponse.class);
                res.listExecutionsResponse = out;
            }
        }

        return res;
    }
	
}