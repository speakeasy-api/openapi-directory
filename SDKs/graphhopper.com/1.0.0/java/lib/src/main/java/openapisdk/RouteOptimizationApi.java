package openapisdk;

import openapisdk.utils.HTTPClient;
import java.util.function.Function;
import java.util.stream.Collectors;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class RouteOptimizationApi {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public RouteOptimizationApi(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * asyncVrp - POST route optimization problem (batch mode)
     *
     * 
     * To solve a vehicle routing problem, perform the following steps:
     * 
     * 1.) Make a HTTP POST to this URL
     * 
     * ```
     * https://graphhopper.com/api/1/vrp/optimize?key=<your_key>
     * ```
     * 
     * It returns a job id (job_id).
     * 
     * 2.) Take the job id and fetch the solution for the vehicle routing problem from this URL:
     * 
     * ```
     * https://graphhopper.com/api/1/vrp/solution/<job_id>?key=<your_key>
     * ```
     * 
     * We recommend to query the solution every 500ms until it returns 'status=finished'.
     * 
     * **Note**: Since the workflow is a bit more cumbersome and since you lose some time in fetching the solution, you should always prefer
     * the [synchronous endpoint](#operation/solveVRP). You should use the batch mode only for long running problems.
     * 
    **/
    public openapisdk.models.operations.AsyncVrpResponse asyncVrp(openapisdk.models.operations.AsyncVrpRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/vrp/optimize");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AsyncVrpResponse res = new openapisdk.models.operations.AsyncVrpResponse() {{
            jobId = null;
            badRequest = null;
            internalErrorMessage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.JobId out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.JobId.class);
                res.jobId = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BadRequest out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BadRequest.class);
                res.badRequest = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.InternalErrorMessage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.InternalErrorMessage.class);
                res.internalErrorMessage = out;
            }
        }

        return res;
    }
	
	
    /**
     * getSolution - GET the solution (batch mode)
     *
     * 
     * Take the job id and fetch the solution for the vehicle routing problem from this URL:
     * 
     * ```
     * https://graphhopper.com/api/1/vrp/solution/<job_id>?key=<your_key>
     * ```
     * 
     * You get the job id by sending a vehicle routing problem to the [batch mode URL](#operation/asyncVRP).
     * 
    **/
    public openapisdk.models.operations.GetSolutionResponse getSolution(openapisdk.models.operations.GetSolutionRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/vrp/solution/{jobId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetSolutionResponse res = new openapisdk.models.operations.GetSolutionResponse() {{
            response = null;
            badRequest = null;
            getSolution404ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Response out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Response.class);
                res.response = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BadRequest out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BadRequest.class);
                res.badRequest = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetSolution404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetSolution404ApplicationJson.class);
                res.getSolution404ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
        }

        return res;
    }
	
	
    /**
     * solveVrp - POST route optimization problem
     *
     * 
     * To get started with the Route Optimization API, please read the [introduction](#tag/Route-Optimization-API).
     * 
     * To solve a new vehicle routing problem, make a HTTP POST to this URL
     * 
     * ```
     * https://graphhopper.com/api/1/vrp?key=<your_key>
     * ```
     * 
     * It returns the solution to this problem in the JSON response.
     * 
     * Please note that this URL is very well suited to solve minor problems.
     * Larger vehicle routing problems, which take longer than 10 seconds to solve, cannot be solved.
     * To solve them, please use the [batch mode URL](#operation/asyncVRP) instead.
     * 
    **/
    public openapisdk.models.operations.SolveVrpResponse solveVrp(openapisdk.models.operations.SolveVrpRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/vrp");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.SolveVrpResponse res = new openapisdk.models.operations.SolveVrpResponse() {{
            response = null;
            badRequest = null;
            internalErrorMessage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Response out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Response.class);
                res.response = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BadRequest out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BadRequest.class);
                res.badRequest = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.InternalErrorMessage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.InternalErrorMessage.class);
                res.internalErrorMessage = out;
            }
        }

        return res;
    }
	
}