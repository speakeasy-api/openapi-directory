

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
		"https://serverless.twilio.com",
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
     * createAsset - Create a new Asset resource.
    **/
    public openapisdk.models.operations.CreateAssetResponse createAsset(openapisdk.models.operations.CreateAssetRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateAssetRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Assets", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateAssetResponse res = new openapisdk.models.operations.CreateAssetResponse() {{
            serverlessV1ServiceAsset = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ServerlessV1ServiceAsset out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ServerlessV1ServiceAsset.class);
                res.serverlessV1ServiceAsset = out;
            }
        }

        return res;
    }
	
	
    /**
     * createBuild - Create a new Build resource. At least one function version or asset version is required.
    **/
    public openapisdk.models.operations.CreateBuildResponse createBuild(openapisdk.models.operations.CreateBuildRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateBuildRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Builds", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateBuildResponse res = new openapisdk.models.operations.CreateBuildResponse() {{
            serverlessV1ServiceBuild = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ServerlessV1ServiceBuild out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ServerlessV1ServiceBuild.class);
                res.serverlessV1ServiceBuild = out;
            }
        }

        return res;
    }
	
	
    /**
     * createDeployment - Create a new Deployment.
    **/
    public openapisdk.models.operations.CreateDeploymentResponse createDeployment(openapisdk.models.operations.CreateDeploymentRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateDeploymentRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Environments/{EnvironmentSid}/Deployments", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateDeploymentResponse res = new openapisdk.models.operations.CreateDeploymentResponse() {{
            serverlessV1ServiceEnvironmentDeployment = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ServerlessV1ServiceEnvironmentDeployment out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ServerlessV1ServiceEnvironmentDeployment.class);
                res.serverlessV1ServiceEnvironmentDeployment = out;
            }
        }

        return res;
    }
	
	
    /**
     * createEnvironment - Create a new environment.
    **/
    public openapisdk.models.operations.CreateEnvironmentResponse createEnvironment(openapisdk.models.operations.CreateEnvironmentRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateEnvironmentRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Environments", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateEnvironmentResponse res = new openapisdk.models.operations.CreateEnvironmentResponse() {{
            serverlessV1ServiceEnvironment = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ServerlessV1ServiceEnvironment out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ServerlessV1ServiceEnvironment.class);
                res.serverlessV1ServiceEnvironment = out;
            }
        }

        return res;
    }
	
	
    /**
     * createFunction - Create a new Function resource.
    **/
    public openapisdk.models.operations.CreateFunctionResponse createFunction(openapisdk.models.operations.CreateFunctionRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateFunctionRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Functions", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateFunctionResponse res = new openapisdk.models.operations.CreateFunctionResponse() {{
            serverlessV1ServiceFunction = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ServerlessV1ServiceFunction out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ServerlessV1ServiceFunction.class);
                res.serverlessV1ServiceFunction = out;
            }
        }

        return res;
    }
	
	
    /**
     * createService - Create a new Service resource.
    **/
    public openapisdk.models.operations.CreateServiceResponse createService(openapisdk.models.operations.CreateServiceRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateServiceRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateServiceResponse res = new openapisdk.models.operations.CreateServiceResponse() {{
            serverlessV1Service = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ServerlessV1Service out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ServerlessV1Service.class);
                res.serverlessV1Service = out;
            }
        }

        return res;
    }
	
	
    /**
     * createVariable - Create a new Variable.
    **/
    public openapisdk.models.operations.CreateVariableResponse createVariable(openapisdk.models.operations.CreateVariableRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateVariableRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Environments/{EnvironmentSid}/Variables", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateVariableResponse res = new openapisdk.models.operations.CreateVariableResponse() {{
            serverlessV1ServiceEnvironmentVariable = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ServerlessV1ServiceEnvironmentVariable out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ServerlessV1ServiceEnvironmentVariable.class);
                res.serverlessV1ServiceEnvironmentVariable = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteAsset - Delete an Asset resource.
    **/
    public openapisdk.models.operations.DeleteAssetResponse deleteAsset(openapisdk.models.operations.DeleteAssetRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteAssetRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Assets/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteAssetResponse res = new openapisdk.models.operations.DeleteAssetResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteBuild - Delete a Build resource.
    **/
    public openapisdk.models.operations.DeleteBuildResponse deleteBuild(openapisdk.models.operations.DeleteBuildRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteBuildRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Builds/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteBuildResponse res = new openapisdk.models.operations.DeleteBuildResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteEnvironment - Delete a specific environment.
    **/
    public openapisdk.models.operations.DeleteEnvironmentResponse deleteEnvironment(openapisdk.models.operations.DeleteEnvironmentRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteEnvironmentRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Environments/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteEnvironmentResponse res = new openapisdk.models.operations.DeleteEnvironmentResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteFunction - Delete a Function resource.
    **/
    public openapisdk.models.operations.DeleteFunctionResponse deleteFunction(openapisdk.models.operations.DeleteFunctionRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteFunctionRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Functions/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteFunctionResponse res = new openapisdk.models.operations.DeleteFunctionResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteService - Delete a Service resource.
    **/
    public openapisdk.models.operations.DeleteServiceResponse deleteService(openapisdk.models.operations.DeleteServiceRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteServiceRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteServiceResponse res = new openapisdk.models.operations.DeleteServiceResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteVariable - Delete a specific Variable.
    **/
    public openapisdk.models.operations.DeleteVariableResponse deleteVariable(openapisdk.models.operations.DeleteVariableRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteVariableRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Environments/{EnvironmentSid}/Variables/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteVariableResponse res = new openapisdk.models.operations.DeleteVariableResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * fetchAsset - Retrieve a specific Asset resource.
    **/
    public openapisdk.models.operations.FetchAssetResponse fetchAsset(openapisdk.models.operations.FetchAssetRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchAssetRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Assets/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchAssetResponse res = new openapisdk.models.operations.FetchAssetResponse() {{
            serverlessV1ServiceAsset = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ServerlessV1ServiceAsset out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ServerlessV1ServiceAsset.class);
                res.serverlessV1ServiceAsset = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchAssetVersion - Retrieve a specific Asset Version.
    **/
    public openapisdk.models.operations.FetchAssetVersionResponse fetchAssetVersion(openapisdk.models.operations.FetchAssetVersionRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchAssetVersionRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Assets/{AssetSid}/Versions/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchAssetVersionResponse res = new openapisdk.models.operations.FetchAssetVersionResponse() {{
            serverlessV1ServiceAssetAssetVersion = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ServerlessV1ServiceAssetAssetVersion out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ServerlessV1ServiceAssetAssetVersion.class);
                res.serverlessV1ServiceAssetAssetVersion = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchBuild - Retrieve a specific Build resource.
    **/
    public openapisdk.models.operations.FetchBuildResponse fetchBuild(openapisdk.models.operations.FetchBuildRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchBuildRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Builds/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchBuildResponse res = new openapisdk.models.operations.FetchBuildResponse() {{
            serverlessV1ServiceBuild = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ServerlessV1ServiceBuild out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ServerlessV1ServiceBuild.class);
                res.serverlessV1ServiceBuild = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchBuildStatus - Retrieve a specific Build resource.
    **/
    public openapisdk.models.operations.FetchBuildStatusResponse fetchBuildStatus(openapisdk.models.operations.FetchBuildStatusRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchBuildStatusRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Builds/{Sid}/Status", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchBuildStatusResponse res = new openapisdk.models.operations.FetchBuildStatusResponse() {{
            serverlessV1ServiceBuildBuildStatus = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ServerlessV1ServiceBuildBuildStatus out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ServerlessV1ServiceBuildBuildStatus.class);
                res.serverlessV1ServiceBuildBuildStatus = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchDeployment - Retrieve a specific Deployment.
    **/
    public openapisdk.models.operations.FetchDeploymentResponse fetchDeployment(openapisdk.models.operations.FetchDeploymentRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchDeploymentRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Environments/{EnvironmentSid}/Deployments/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchDeploymentResponse res = new openapisdk.models.operations.FetchDeploymentResponse() {{
            serverlessV1ServiceEnvironmentDeployment = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ServerlessV1ServiceEnvironmentDeployment out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ServerlessV1ServiceEnvironmentDeployment.class);
                res.serverlessV1ServiceEnvironmentDeployment = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchEnvironment - Retrieve a specific environment.
    **/
    public openapisdk.models.operations.FetchEnvironmentResponse fetchEnvironment(openapisdk.models.operations.FetchEnvironmentRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchEnvironmentRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Environments/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchEnvironmentResponse res = new openapisdk.models.operations.FetchEnvironmentResponse() {{
            serverlessV1ServiceEnvironment = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ServerlessV1ServiceEnvironment out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ServerlessV1ServiceEnvironment.class);
                res.serverlessV1ServiceEnvironment = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchFunction - Retrieve a specific Function resource.
    **/
    public openapisdk.models.operations.FetchFunctionResponse fetchFunction(openapisdk.models.operations.FetchFunctionRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchFunctionRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Functions/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchFunctionResponse res = new openapisdk.models.operations.FetchFunctionResponse() {{
            serverlessV1ServiceFunction = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ServerlessV1ServiceFunction out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ServerlessV1ServiceFunction.class);
                res.serverlessV1ServiceFunction = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchFunctionVersion - Retrieve a specific Function Version resource.
    **/
    public openapisdk.models.operations.FetchFunctionVersionResponse fetchFunctionVersion(openapisdk.models.operations.FetchFunctionVersionRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchFunctionVersionRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Functions/{FunctionSid}/Versions/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchFunctionVersionResponse res = new openapisdk.models.operations.FetchFunctionVersionResponse() {{
            serverlessV1ServiceFunctionFunctionVersion = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ServerlessV1ServiceFunctionFunctionVersion out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ServerlessV1ServiceFunctionFunctionVersion.class);
                res.serverlessV1ServiceFunctionFunctionVersion = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchFunctionVersionContent - Retrieve a the content of a specific Function Version resource.
    **/
    public openapisdk.models.operations.FetchFunctionVersionContentResponse fetchFunctionVersionContent(openapisdk.models.operations.FetchFunctionVersionContentRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchFunctionVersionContentRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Functions/{FunctionSid}/Versions/{Sid}/Content", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchFunctionVersionContentResponse res = new openapisdk.models.operations.FetchFunctionVersionContentResponse() {{
            serverlessV1ServiceFunctionFunctionVersionFunctionVersionContent = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ServerlessV1ServiceFunctionFunctionVersionFunctionVersionContent out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ServerlessV1ServiceFunctionFunctionVersionFunctionVersionContent.class);
                res.serverlessV1ServiceFunctionFunctionVersionFunctionVersionContent = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchLog - Retrieve a specific log.
    **/
    public openapisdk.models.operations.FetchLogResponse fetchLog(openapisdk.models.operations.FetchLogRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchLogRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Environments/{EnvironmentSid}/Logs/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchLogResponse res = new openapisdk.models.operations.FetchLogResponse() {{
            serverlessV1ServiceEnvironmentLog = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ServerlessV1ServiceEnvironmentLog out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ServerlessV1ServiceEnvironmentLog.class);
                res.serverlessV1ServiceEnvironmentLog = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchService - Retrieve a specific Service resource.
    **/
    public openapisdk.models.operations.FetchServiceResponse fetchService(openapisdk.models.operations.FetchServiceRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchServiceRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchServiceResponse res = new openapisdk.models.operations.FetchServiceResponse() {{
            serverlessV1Service = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ServerlessV1Service out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ServerlessV1Service.class);
                res.serverlessV1Service = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchVariable - Retrieve a specific Variable.
    **/
    public openapisdk.models.operations.FetchVariableResponse fetchVariable(openapisdk.models.operations.FetchVariableRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchVariableRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Environments/{EnvironmentSid}/Variables/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchVariableResponse res = new openapisdk.models.operations.FetchVariableResponse() {{
            serverlessV1ServiceEnvironmentVariable = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ServerlessV1ServiceEnvironmentVariable out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ServerlessV1ServiceEnvironmentVariable.class);
                res.serverlessV1ServiceEnvironmentVariable = out;
            }
        }

        return res;
    }
	
	
    /**
     * listAsset - Retrieve a list of all Assets.
    **/
    public openapisdk.models.operations.ListAssetResponse listAsset(openapisdk.models.operations.ListAssetRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListAssetRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Assets", request.pathParams);
        
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

        openapisdk.models.operations.ListAssetResponse res = new openapisdk.models.operations.ListAssetResponse() {{
            listAssetResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListAssetListAssetResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListAssetListAssetResponse.class);
                res.listAssetResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listAssetVersion - Retrieve a list of all Asset Versions.
    **/
    public openapisdk.models.operations.ListAssetVersionResponse listAssetVersion(openapisdk.models.operations.ListAssetVersionRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListAssetVersionRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Assets/{AssetSid}/Versions", request.pathParams);
        
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

        openapisdk.models.operations.ListAssetVersionResponse res = new openapisdk.models.operations.ListAssetVersionResponse() {{
            listAssetVersionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListAssetVersionListAssetVersionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListAssetVersionListAssetVersionResponse.class);
                res.listAssetVersionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listBuild - Retrieve a list of all Builds.
    **/
    public openapisdk.models.operations.ListBuildResponse listBuild(openapisdk.models.operations.ListBuildRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListBuildRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Builds", request.pathParams);
        
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

        openapisdk.models.operations.ListBuildResponse res = new openapisdk.models.operations.ListBuildResponse() {{
            listBuildResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListBuildListBuildResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListBuildListBuildResponse.class);
                res.listBuildResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listDeployment - Retrieve a list of all Deployments.
    **/
    public openapisdk.models.operations.ListDeploymentResponse listDeployment(openapisdk.models.operations.ListDeploymentRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListDeploymentRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Environments/{EnvironmentSid}/Deployments", request.pathParams);
        
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

        openapisdk.models.operations.ListDeploymentResponse res = new openapisdk.models.operations.ListDeploymentResponse() {{
            listDeploymentResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListDeploymentListDeploymentResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListDeploymentListDeploymentResponse.class);
                res.listDeploymentResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listEnvironment - Retrieve a list of all environments.
    **/
    public openapisdk.models.operations.ListEnvironmentResponse listEnvironment(openapisdk.models.operations.ListEnvironmentRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListEnvironmentRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Environments", request.pathParams);
        
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

        openapisdk.models.operations.ListEnvironmentResponse res = new openapisdk.models.operations.ListEnvironmentResponse() {{
            listEnvironmentResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListEnvironmentListEnvironmentResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListEnvironmentListEnvironmentResponse.class);
                res.listEnvironmentResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listFunction - Retrieve a list of all Functions.
    **/
    public openapisdk.models.operations.ListFunctionResponse listFunction(openapisdk.models.operations.ListFunctionRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListFunctionRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Functions", request.pathParams);
        
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

        openapisdk.models.operations.ListFunctionResponse res = new openapisdk.models.operations.ListFunctionResponse() {{
            listFunctionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListFunctionListFunctionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListFunctionListFunctionResponse.class);
                res.listFunctionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listFunctionVersion - Retrieve a list of all Function Version resources.
    **/
    public openapisdk.models.operations.ListFunctionVersionResponse listFunctionVersion(openapisdk.models.operations.ListFunctionVersionRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListFunctionVersionRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Functions/{FunctionSid}/Versions", request.pathParams);
        
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

        openapisdk.models.operations.ListFunctionVersionResponse res = new openapisdk.models.operations.ListFunctionVersionResponse() {{
            listFunctionVersionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListFunctionVersionListFunctionVersionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListFunctionVersionListFunctionVersionResponse.class);
                res.listFunctionVersionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listLog - Retrieve a list of all logs.
    **/
    public openapisdk.models.operations.ListLogResponse listLog(openapisdk.models.operations.ListLogRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListLogRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Environments/{EnvironmentSid}/Logs", request.pathParams);
        
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

        openapisdk.models.operations.ListLogResponse res = new openapisdk.models.operations.ListLogResponse() {{
            listLogResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListLogListLogResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListLogListLogResponse.class);
                res.listLogResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listService - Retrieve a list of all Services.
    **/
    public openapisdk.models.operations.ListServiceResponse listService(openapisdk.models.operations.ListServiceRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListServiceRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services");
        
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

        openapisdk.models.operations.ListServiceResponse res = new openapisdk.models.operations.ListServiceResponse() {{
            listServiceResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListServiceListServiceResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListServiceListServiceResponse.class);
                res.listServiceResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listVariable - Retrieve a list of all Variables.
    **/
    public openapisdk.models.operations.ListVariableResponse listVariable(openapisdk.models.operations.ListVariableRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListVariableRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Environments/{EnvironmentSid}/Variables", request.pathParams);
        
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

        openapisdk.models.operations.ListVariableResponse res = new openapisdk.models.operations.ListVariableResponse() {{
            listVariableResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListVariableListVariableResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListVariableListVariableResponse.class);
                res.listVariableResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateAsset - Update a specific Asset resource.
    **/
    public openapisdk.models.operations.UpdateAssetResponse updateAsset(openapisdk.models.operations.UpdateAssetRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateAssetRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Assets/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateAssetResponse res = new openapisdk.models.operations.UpdateAssetResponse() {{
            serverlessV1ServiceAsset = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ServerlessV1ServiceAsset out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ServerlessV1ServiceAsset.class);
                res.serverlessV1ServiceAsset = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateFunction - Update a specific Function resource.
    **/
    public openapisdk.models.operations.UpdateFunctionResponse updateFunction(openapisdk.models.operations.UpdateFunctionRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateFunctionRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Functions/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateFunctionResponse res = new openapisdk.models.operations.UpdateFunctionResponse() {{
            serverlessV1ServiceFunction = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ServerlessV1ServiceFunction out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ServerlessV1ServiceFunction.class);
                res.serverlessV1ServiceFunction = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateService - Update a specific Service resource.
    **/
    public openapisdk.models.operations.UpdateServiceResponse updateService(openapisdk.models.operations.UpdateServiceRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateServiceRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateServiceResponse res = new openapisdk.models.operations.UpdateServiceResponse() {{
            serverlessV1Service = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ServerlessV1Service out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ServerlessV1Service.class);
                res.serverlessV1Service = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateVariable - Update a specific Variable.
    **/
    public openapisdk.models.operations.UpdateVariableResponse updateVariable(openapisdk.models.operations.UpdateVariableRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateVariableRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Environments/{EnvironmentSid}/Variables/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateVariableResponse res = new openapisdk.models.operations.UpdateVariableResponse() {{
            serverlessV1ServiceEnvironmentVariable = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ServerlessV1ServiceEnvironmentVariable out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ServerlessV1ServiceEnvironmentVariable.class);
                res.serverlessV1ServiceEnvironmentVariable = out;
            }
        }

        return res;
    }
	
}