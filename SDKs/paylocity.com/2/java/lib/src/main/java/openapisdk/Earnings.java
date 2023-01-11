package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class Earnings {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Earnings(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * addOrUpdateAnEmployeeEarning - Add/Update Earning
     *
     * Add/Update Earning API sends new or updated employee earnings information directly to Web Pay.
    **/
    public openapisdk.models.operations.AddOrUpdateAnEmployeeEarningResponse addOrUpdateAnEmployeeEarning(openapisdk.models.operations.AddOrUpdateAnEmployeeEarningRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/companies/{companyId}/employees/{employeeId}/earnings", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AddOrUpdateAnEmployeeEarningResponse res = new openapisdk.models.operations.AddOrUpdateAnEmployeeEarningResponse() {{
            errors = null;
            errors = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error[].class);
                res.errors = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 429) {
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error[].class);
                res.errors = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteEarningByEarningCodeAndStartDate - Delete Earning by Earning Code and Start Date
     *
     * Delete Earning by Earning Code and Start Date
    **/
    public openapisdk.models.operations.DeleteEarningByEarningCodeAndStartDateResponse deleteEarningByEarningCodeAndStartDate(openapisdk.models.operations.DeleteEarningByEarningCodeAndStartDateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/companies/{companyId}/employees/{employeeId}/earnings/{earningCode}/{startDate}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteEarningByEarningCodeAndStartDateResponse res = new openapisdk.models.operations.DeleteEarningByEarningCodeAndStartDateResponse() {{
            errors = null;
            errors = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error[].class);
                res.errors = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 429) {
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error[].class);
                res.errors = out;
            }
        }

        return res;
    }
	
	
    /**
     * getAllEarnings - Get All Earnings
     *
     * Get All Earnings returns all earnings for the selected employee.
    **/
    public openapisdk.models.operations.GetAllEarningsResponse getAllEarnings(openapisdk.models.operations.GetAllEarningsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/companies/{companyId}/employees/{employeeId}/earnings", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetAllEarningsResponse res = new openapisdk.models.operations.GetAllEarningsResponse() {{
            earnings = null;
            errors = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Earning[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Earning[].class);
                res.earnings = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 429) {
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error[].class);
                res.errors = out;
            }
        }

        return res;
    }
	
	
    /**
     * getEarningByEarningCodeAndStartDate - Get Earning by Earning Code and Start Date
     *
     * Get Earnings returns the single earning with the provided earning code and start date for the selected employee.
    **/
    public openapisdk.models.operations.GetEarningByEarningCodeAndStartDateResponse getEarningByEarningCodeAndStartDate(openapisdk.models.operations.GetEarningByEarningCodeAndStartDateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/companies/{companyId}/employees/{employeeId}/earnings/{earningCode}/{startDate}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetEarningByEarningCodeAndStartDateResponse res = new openapisdk.models.operations.GetEarningByEarningCodeAndStartDateResponse() {{
            earning = null;
            errors = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Earning out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Earning.class);
                res.earning = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 429) {
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error[].class);
                res.errors = out;
            }
        }

        return res;
    }
	
	
    /**
     * getEarningsByEarningCode - Get Earnings by Earning Code
     *
     * Get Earnings returns all earnings with the provided earning code for the selected employee.
    **/
    public openapisdk.models.operations.GetEarningsByEarningCodeResponse getEarningsByEarningCode(openapisdk.models.operations.GetEarningsByEarningCodeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/companies/{companyId}/employees/{employeeId}/earnings/{earningCode}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetEarningsByEarningCodeResponse res = new openapisdk.models.operations.GetEarningsByEarningCodeResponse() {{
            earnings = null;
            errors = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Earning[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Earning[].class);
                res.earnings = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 429) {
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error[].class);
                res.errors = out;
            }
        }

        return res;
    }
	
}