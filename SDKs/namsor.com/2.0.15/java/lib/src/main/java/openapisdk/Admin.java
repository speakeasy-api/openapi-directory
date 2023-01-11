package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;

public class Admin {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Admin(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * anonymize - Activate/deactivate anonymization for a source.
    **/
    public openapisdk.models.operations.AnonymizeResponse anonymize(openapisdk.models.operations.AnonymizeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api2/json/anonymize/{source}/{anonymized}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AnonymizeResponse res = new openapisdk.models.operations.AnonymizeResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 401) {
        }

        return res;
    }
	
	
    /**
     * apiStatus - Prints the current status of the classifiers. A classifier name in apiStatus corresponds to a service name in apiServices.
    **/
    public openapisdk.models.operations.ApiStatusResponse apiStatus() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api2/json/apiStatus");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ApiStatusResponse res = new openapisdk.models.operations.ApiStatusResponse() {{
            apiClassifiersStatusOut = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiClassifiersStatusOut out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiClassifiersStatusOut.class);
                res.apiClassifiersStatusOut = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
        }

        return res;
    }
	
	
    /**
     * apiUsage - Print current API usage.
    **/
    public openapisdk.models.operations.ApiUsageResponse apiUsage(openapisdk.models.operations.ApiUsageRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api2/json/apiUsage");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ApiUsageResponse res = new openapisdk.models.operations.ApiUsageResponse() {{
            apiPeriodUsageOut = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiPeriodUsageOut out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiPeriodUsageOut.class);
                res.apiPeriodUsageOut = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
        }

        return res;
    }
	
	
    /**
     * apiUsageHistory - Print historical API usage.
    **/
    public openapisdk.models.operations.ApiUsageHistoryResponse apiUsageHistory(openapisdk.models.operations.ApiUsageHistoryRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api2/json/apiUsageHistory");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ApiUsageHistoryResponse res = new openapisdk.models.operations.ApiUsageHistoryResponse() {{
            apiUsageHistoryOut = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiUsageHistoryOut out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiUsageHistoryOut.class);
                res.apiUsageHistoryOut = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
        }

        return res;
    }
	
	
    /**
     * apiUsageHistoryAggregate - Print historical API usage (in an aggregated view, by service, by day/hour/min).
    **/
    public openapisdk.models.operations.ApiUsageHistoryAggregateResponse apiUsageHistoryAggregate(openapisdk.models.operations.ApiUsageHistoryAggregateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api2/json/apiUsageHistoryAggregate");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ApiUsageHistoryAggregateResponse res = new openapisdk.models.operations.ApiUsageHistoryAggregateResponse() {{
            apiUsageAggregatedOut = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiUsageAggregatedOut out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiUsageAggregatedOut.class);
                res.apiUsageAggregatedOut = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
        }

        return res;
    }
	
	
    /**
     * availableServices - List of classification services and usage cost in Units per classification (default is 1=ONE Unit). Some API endpoints (ex. Corridor) combine multiple classifiers.
    **/
    public openapisdk.models.operations.AvailableServicesResponse availableServices() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api2/json/apiServices");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AvailableServicesResponse res = new openapisdk.models.operations.AvailableServicesResponse() {{
            apiServicesOut = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiServicesOut out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiServicesOut.class);
                res.apiServicesOut = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
        }

        return res;
    }
	
	
    /**
     * disable - Activate/deactivate an API Key.
    **/
    public openapisdk.models.operations.DisableResponse disable(openapisdk.models.operations.DisableRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api2/json/disable/{source}/{disabled}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DisableResponse res = new openapisdk.models.operations.DisableResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 401) {
        }

        return res;
    }
	
	
    /**
     * learnable - Activate/deactivate learning from a source.
    **/
    public openapisdk.models.operations.LearnableResponse learnable(openapisdk.models.operations.LearnableRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api2/json/learnable/{source}/{learnable}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.LearnableResponse res = new openapisdk.models.operations.LearnableResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 401) {
        }

        return res;
    }
	
	
    /**
     * softwareVersion - Get the current software version
    **/
    public openapisdk.models.operations.SoftwareVersionResponse softwareVersion() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api2/json/softwareVersion");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.SoftwareVersionResponse res = new openapisdk.models.operations.SoftwareVersionResponse() {{
            softwareVersionOut = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SoftwareVersionOut out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SoftwareVersionOut.class);
                res.softwareVersionOut = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
        }

        return res;
    }
	
	
    /**
     * taxonomyClasses - Print the taxonomy classes valid for the given classifier.
    **/
    public openapisdk.models.operations.TaxonomyClassesResponse taxonomyClasses(openapisdk.models.operations.TaxonomyClassesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api2/json/taxonomyClasses/{classifierName}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TaxonomyClassesResponse res = new openapisdk.models.operations.TaxonomyClassesResponse() {{
            apiClassifierTaxonomyOut = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiClassifierTaxonomyOut out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiClassifierTaxonomyOut.class);
                res.apiClassifierTaxonomyOut = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
        }

        return res;
    }
	
}