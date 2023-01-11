package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class CoveragePlans {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public CoveragePlans(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * createCoveragePlan - Create Coverage Plan
     *
     * Here you can associate a plan with a line of coverage and then pass information about the plan like the name, network, waiting periods, and other details.
    **/
    public openapisdk.models.operations.CreateCoveragePlanResponse createCoveragePlan(openapisdk.models.operations.CreateCoveragePlanRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/v1/group_coverages/{group_coverage_id}/coverage_plans", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateCoveragePlanResponse res = new openapisdk.models.operations.CreateCoveragePlanResponse() {{
            coveragePlanResult = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CoveragePlanResult out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CoveragePlanResult.class);
                res.coveragePlanResult = out;
            }
        }

        return res;
    }
	
	
    /**
     * editCoveragePlan - Edit a Coverage Plan
     *
     * Edit a coverage plan based on the ID provided. The version parameter must match the latest coverage plan version.
    **/
    public openapisdk.models.operations.EditCoveragePlanResponse editCoveragePlan(openapisdk.models.operations.EditCoveragePlanRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/v1/coverage_plans/{plan_id}/{version}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EditCoveragePlanResponse res = new openapisdk.models.operations.EditCoveragePlanResponse() {{
            coveragePlanResult = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CoveragePlanResult out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CoveragePlanResult.class);
                res.coveragePlanResult = out;
            }
        }

        return res;
    }
	
	
    /**
     * getCoveragePlan - Get Coverage Plan
     *
     * Returns the latest version of a single coverage plan based on the ID provided.
    **/
    public openapisdk.models.operations.GetCoveragePlanResponse getCoveragePlan(openapisdk.models.operations.GetCoveragePlanRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/v1/coverage_plans/{plan_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetCoveragePlanResponse res = new openapisdk.models.operations.GetCoveragePlanResponse() {{
            coveragePlanResult = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CoveragePlanResult out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CoveragePlanResult.class);
                res.coveragePlanResult = out;
            }
        }

        return res;
    }
	
	
    /**
     * getGroupCoveragePlans - Get all Group Coverage Plans
     *
     * Returns a list of all coverage plans for a given group coverage
    **/
    public openapisdk.models.operations.GetGroupCoveragePlansResponse getGroupCoveragePlans(openapisdk.models.operations.GetGroupCoveragePlansRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/v1/group_coverages/{group_coverage_id}/coverage_plans", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetGroupCoveragePlansResponse res = new openapisdk.models.operations.GetGroupCoveragePlansResponse() {{
            paginatedCoveragePlanResult = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PaginatedCoveragePlanResult out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PaginatedCoveragePlanResult.class);
                res.paginatedCoveragePlanResult = out;
            }
        }

        return res;
    }
	
}