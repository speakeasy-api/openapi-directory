package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;
import java.time.LocalDate;

public class Scans {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Scans(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getTargetsAllScans - List scans for all targets
    **/
    public openapisdk.models.operations.GetTargetsAllScansResponse getTargetsAllScans(openapisdk.models.operations.GetTargetsAllScansRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/targets/all/scans/");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetTargetsAllScansResponse res = new openapisdk.models.operations.GetTargetsAllScansResponse() {{
            getTargetsAllScans200ApplicationJSONObject = null;
            getTargetsAllScans401ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetTargetsAllScans200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetTargetsAllScans200ApplicationJson.class);
                res.getTargetsAllScans200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetTargetsAllScans401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetTargetsAllScans401ApplicationJson.class);
                res.getTargetsAllScans401ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getTargetsTargetIdScans - List scans
    **/
    public openapisdk.models.operations.GetTargetsTargetIdScansResponse getTargetsTargetIdScans(openapisdk.models.operations.GetTargetsTargetIdScansRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/targets/{target_id}/scans/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetTargetsTargetIdScansResponse res = new openapisdk.models.operations.GetTargetsTargetIdScansResponse() {{
            getTargetsTargetIdScans200ApplicationJSONObject = null;
            getTargetsTargetIdScans401ApplicationJSONObject = null;
            getTargetsTargetIdScans404ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetTargetsTargetIdScans200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetTargetsTargetIdScans200ApplicationJson.class);
                res.getTargetsTargetIdScans200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetTargetsTargetIdScans401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetTargetsTargetIdScans401ApplicationJson.class);
                res.getTargetsTargetIdScans401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetTargetsTargetIdScans404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetTargetsTargetIdScans404ApplicationJson.class);
                res.getTargetsTargetIdScans404ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getTargetsTargetIdScansDates - Dates where scans have ocurred
    **/
    public openapisdk.models.operations.GetTargetsTargetIdScansDatesResponse getTargetsTargetIdScansDates(openapisdk.models.operations.GetTargetsTargetIdScansDatesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/targets/{target_id}/scans/dates/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetTargetsTargetIdScansDatesResponse res = new openapisdk.models.operations.GetTargetsTargetIdScansDatesResponse() {{
            getTargetsTargetIdScansDates200ApplicationJSONDateStrings = null;
            getTargetsTargetIdScansDates401ApplicationJSONObject = null;
            getTargetsTargetIdScansDates404ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                LocalDate[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), LocalDate[].class);
                res.getTargetsTargetIdScansDates200ApplicationJSONDateStrings = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetTargetsTargetIdScansDates401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetTargetsTargetIdScansDates401ApplicationJson.class);
                res.getTargetsTargetIdScansDates401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetTargetsTargetIdScansDates404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetTargetsTargetIdScansDates404ApplicationJson.class);
                res.getTargetsTargetIdScansDates404ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getTargetsTargetIdScansRetrievePage - Scan page
     *
     * Given a date return the page number
    **/
    public openapisdk.models.operations.GetTargetsTargetIdScansRetrievePageResponse getTargetsTargetIdScansRetrievePage(openapisdk.models.operations.GetTargetsTargetIdScansRetrievePageRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/targets/{target_id}/scans/retrieve_page/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetTargetsTargetIdScansRetrievePageResponse res = new openapisdk.models.operations.GetTargetsTargetIdScansRetrievePageResponse() {{
            getTargetsTargetIdScansRetrievePage200ApplicationJSONObject = null;
            getTargetsTargetIdScansRetrievePage400ApplicationJSONObject = null;
            getTargetsTargetIdScansRetrievePage401ApplicationJSONObject = null;
            getTargetsTargetIdScansRetrievePage404ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetTargetsTargetIdScansRetrievePage200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetTargetsTargetIdScansRetrievePage200ApplicationJson.class);
                res.getTargetsTargetIdScansRetrievePage200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetTargetsTargetIdScansRetrievePage400ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetTargetsTargetIdScansRetrievePage400ApplicationJson.class);
                res.getTargetsTargetIdScansRetrievePage400ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetTargetsTargetIdScansRetrievePage401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetTargetsTargetIdScansRetrievePage401ApplicationJson.class);
                res.getTargetsTargetIdScansRetrievePage401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetTargetsTargetIdScansRetrievePage404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetTargetsTargetIdScansRetrievePage404ApplicationJson.class);
                res.getTargetsTargetIdScansRetrievePage404ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getTargetsTargetIdScansId - Retrieve scan
    **/
    public openapisdk.models.operations.GetTargetsTargetIdScansIdResponse getTargetsTargetIdScansId(openapisdk.models.operations.GetTargetsTargetIdScansIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/targets/{target_id}/scans/{id}/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetTargetsTargetIdScansIdResponse res = new openapisdk.models.operations.GetTargetsTargetIdScansIdResponse() {{
            scan = null;
            getTargetsTargetIdScansId401ApplicationJSONObject = null;
            getTargetsTargetIdScansId404ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Scan out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Scan.class);
                res.scan = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetTargetsTargetIdScansId401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetTargetsTargetIdScansId401ApplicationJson.class);
                res.getTargetsTargetIdScansId401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetTargetsTargetIdScansId404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetTargetsTargetIdScansId404ApplicationJson.class);
                res.getTargetsTargetIdScansId404ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getTargetsTargetIdScansIdEndpoints - Scan endpoints file
    **/
    public openapisdk.models.operations.GetTargetsTargetIdScansIdEndpointsResponse getTargetsTargetIdScansIdEndpoints(openapisdk.models.operations.GetTargetsTargetIdScansIdEndpointsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/targets/{target_id}/scans/{id}/endpoints/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetTargetsTargetIdScansIdEndpointsResponse res = new openapisdk.models.operations.GetTargetsTargetIdScansIdEndpointsResponse() {{
            getTargetsTargetIdScansIdEndpoints200ApplicationCsvBinaryString = null;
            getTargetsTargetIdScansIdEndpoints401ApplicationJSONObject = null;
            getTargetsTargetIdScansIdEndpoints404ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/csv")) {
                byte[] out = httpRes.body();
                res.getTargetsTargetIdScansIdEndpoints200ApplicationCsvBinaryString = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetTargetsTargetIdScansIdEndpoints401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetTargetsTargetIdScansIdEndpoints401ApplicationJson.class);
                res.getTargetsTargetIdScansIdEndpoints401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetTargetsTargetIdScansIdEndpoints404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetTargetsTargetIdScansIdEndpoints404ApplicationJson.class);
                res.getTargetsTargetIdScansIdEndpoints404ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getTargetsTargetIdScansIdReport - Scan report PDF, using the report type specified for the target
    **/
    public openapisdk.models.operations.GetTargetsTargetIdScansIdReportResponse getTargetsTargetIdScansIdReport(openapisdk.models.operations.GetTargetsTargetIdScansIdReportRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/targets/{target_id}/scans/{id}/report/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetTargetsTargetIdScansIdReportResponse res = new openapisdk.models.operations.GetTargetsTargetIdScansIdReportResponse() {{
            getTargetsTargetIdScansIdReport200ApplicationPdfBinaryString = null;
            getTargetsTargetIdScansIdReport401ApplicationJSONObject = null;
            getTargetsTargetIdScansIdReport404ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/pdf")) {
                byte[] out = httpRes.body();
                res.getTargetsTargetIdScansIdReport200ApplicationPdfBinaryString = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetTargetsTargetIdScansIdReport401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetTargetsTargetIdScansIdReport401ApplicationJson.class);
                res.getTargetsTargetIdScansIdReport401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetTargetsTargetIdScansIdReport404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetTargetsTargetIdScansIdReport404ApplicationJson.class);
                res.getTargetsTargetIdScansIdReport404ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getTargetsTargetIdScansIdReportDefault - Scan report PDF, using the default report type
    **/
    public openapisdk.models.operations.GetTargetsTargetIdScansIdReportDefaultResponse getTargetsTargetIdScansIdReportDefault(openapisdk.models.operations.GetTargetsTargetIdScansIdReportDefaultRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/targets/{target_id}/scans/{id}/report/default/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetTargetsTargetIdScansIdReportDefaultResponse res = new openapisdk.models.operations.GetTargetsTargetIdScansIdReportDefaultResponse() {{
            getTargetsTargetIdScansIdReportDefault200ApplicationPdfBinaryString = null;
            getTargetsTargetIdScansIdReportDefault401ApplicationJSONObject = null;
            getTargetsTargetIdScansIdReportDefault404ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/pdf")) {
                byte[] out = httpRes.body();
                res.getTargetsTargetIdScansIdReportDefault200ApplicationPdfBinaryString = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetTargetsTargetIdScansIdReportDefault401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetTargetsTargetIdScansIdReportDefault401ApplicationJson.class);
                res.getTargetsTargetIdScansIdReportDefault401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetTargetsTargetIdScansIdReportDefault404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetTargetsTargetIdScansIdReportDefault404ApplicationJson.class);
                res.getTargetsTargetIdScansIdReportDefault404ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getTargetsTargetIdScansIdReportOwasp - Scan report PDF, using the OWASP report type
    **/
    public openapisdk.models.operations.GetTargetsTargetIdScansIdReportOwaspResponse getTargetsTargetIdScansIdReportOwasp(openapisdk.models.operations.GetTargetsTargetIdScansIdReportOwaspRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/targets/{target_id}/scans/{id}/report/owasp/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetTargetsTargetIdScansIdReportOwaspResponse res = new openapisdk.models.operations.GetTargetsTargetIdScansIdReportOwaspResponse() {{
            getTargetsTargetIdScansIdReportOwasp200ApplicationPdfBinaryString = null;
            getTargetsTargetIdScansIdReportOwasp401ApplicationJSONObject = null;
            getTargetsTargetIdScansIdReportOwasp404ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/pdf")) {
                byte[] out = httpRes.body();
                res.getTargetsTargetIdScansIdReportOwasp200ApplicationPdfBinaryString = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetTargetsTargetIdScansIdReportOwasp401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetTargetsTargetIdScansIdReportOwasp401ApplicationJson.class);
                res.getTargetsTargetIdScansIdReportOwasp401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetTargetsTargetIdScansIdReportOwasp404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetTargetsTargetIdScansIdReportOwasp404ApplicationJson.class);
                res.getTargetsTargetIdScansIdReportOwasp404ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getTargetsTargetIdScansIdReportPci - Scan report PDF, using the PCI report type
    **/
    public openapisdk.models.operations.GetTargetsTargetIdScansIdReportPciResponse getTargetsTargetIdScansIdReportPci(openapisdk.models.operations.GetTargetsTargetIdScansIdReportPciRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/targets/{target_id}/scans/{id}/report/pci/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetTargetsTargetIdScansIdReportPciResponse res = new openapisdk.models.operations.GetTargetsTargetIdScansIdReportPciResponse() {{
            getTargetsTargetIdScansIdReportPci200ApplicationPdfBinaryString = null;
            getTargetsTargetIdScansIdReportPci401ApplicationJSONObject = null;
            getTargetsTargetIdScansIdReportPci404ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/pdf")) {
                byte[] out = httpRes.body();
                res.getTargetsTargetIdScansIdReportPci200ApplicationPdfBinaryString = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetTargetsTargetIdScansIdReportPci401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetTargetsTargetIdScansIdReportPci401ApplicationJson.class);
                res.getTargetsTargetIdScansIdReportPci401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetTargetsTargetIdScansIdReportPci404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetTargetsTargetIdScansIdReportPci404ApplicationJson.class);
                res.getTargetsTargetIdScansIdReportPci404ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postTargetsTargetIdScanNow - Start a scan on the target
    **/
    public openapisdk.models.operations.PostTargetsTargetIdScanNowResponse postTargetsTargetIdScanNow(openapisdk.models.operations.PostTargetsTargetIdScanNowRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/targets/{target_id}/scan_now/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostTargetsTargetIdScanNowResponse res = new openapisdk.models.operations.PostTargetsTargetIdScanNowResponse() {{
            scan = null;
            postTargetsTargetIdScanNow400ApplicationJSONObject = null;
            postTargetsTargetIdScanNow401ApplicationJSONObject = null;
            postTargetsTargetIdScanNow403ApplicationJSONObject = null;
            postTargetsTargetIdScanNow404ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Scan out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Scan.class);
                res.scan = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostTargetsTargetIdScanNow400ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostTargetsTargetIdScanNow400ApplicationJson.class);
                res.postTargetsTargetIdScanNow400ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostTargetsTargetIdScanNow401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostTargetsTargetIdScanNow401ApplicationJson.class);
                res.postTargetsTargetIdScanNow401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostTargetsTargetIdScanNow403ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostTargetsTargetIdScanNow403ApplicationJson.class);
                res.postTargetsTargetIdScanNow403ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostTargetsTargetIdScanNow404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostTargetsTargetIdScanNow404ApplicationJson.class);
                res.postTargetsTargetIdScanNow404ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postTargetsTargetIdScansIdCancel - Cancel running scan
    **/
    public openapisdk.models.operations.PostTargetsTargetIdScansIdCancelResponse postTargetsTargetIdScansIdCancel(openapisdk.models.operations.PostTargetsTargetIdScansIdCancelRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/targets/{target_id}/scans/{id}/cancel/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostTargetsTargetIdScansIdCancelResponse res = new openapisdk.models.operations.PostTargetsTargetIdScansIdCancelResponse() {{
            scan = null;
            postTargetsTargetIdScansIdCancel401ApplicationJSONObject = null;
            postTargetsTargetIdScansIdCancel403ApplicationJSONObject = null;
            postTargetsTargetIdScansIdCancel404ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Scan out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Scan.class);
                res.scan = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostTargetsTargetIdScansIdCancel401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostTargetsTargetIdScansIdCancel401ApplicationJson.class);
                res.postTargetsTargetIdScansIdCancel401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostTargetsTargetIdScansIdCancel403ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostTargetsTargetIdScansIdCancel403ApplicationJson.class);
                res.postTargetsTargetIdScansIdCancel403ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostTargetsTargetIdScansIdCancel404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostTargetsTargetIdScansIdCancel404ApplicationJson.class);
                res.postTargetsTargetIdScansIdCancel404ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}