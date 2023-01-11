package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Bidders {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Bidders(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * adexchangebuyer2BiddersFilterSetsBidMetricsList - Lists all metrics that are measured in terms of number of bids.
    **/
    public openapisdk.models.operations.Adexchangebuyer2BiddersFilterSetsBidMetricsListResponse adexchangebuyer2BiddersFilterSetsBidMetricsList(openapisdk.models.operations.Adexchangebuyer2BiddersFilterSetsBidMetricsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta1/{filterSetName}/bidMetrics", request.pathParams);
        
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

        openapisdk.models.operations.Adexchangebuyer2BiddersFilterSetsBidMetricsListResponse res = new openapisdk.models.operations.Adexchangebuyer2BiddersFilterSetsBidMetricsListResponse() {{
            listBidMetricsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListBidMetricsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListBidMetricsResponse.class);
                res.listBidMetricsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * adexchangebuyer2BiddersFilterSetsBidResponseErrorsList - List all errors that occurred in bid responses, with the number of bid responses affected for each reason.
    **/
    public openapisdk.models.operations.Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListResponse adexchangebuyer2BiddersFilterSetsBidResponseErrorsList(openapisdk.models.operations.Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta1/{filterSetName}/bidResponseErrors", request.pathParams);
        
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

        openapisdk.models.operations.Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListResponse res = new openapisdk.models.operations.Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListResponse() {{
            listBidResponseErrorsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListBidResponseErrorsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListBidResponseErrorsResponse.class);
                res.listBidResponseErrorsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsList - List all reasons for which bid responses were considered to have no applicable bids, with the number of bid responses affected for each reason.
    **/
    public openapisdk.models.operations.Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListResponse adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsList(openapisdk.models.operations.Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta1/{filterSetName}/bidResponsesWithoutBids", request.pathParams);
        
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

        openapisdk.models.operations.Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListResponse res = new openapisdk.models.operations.Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListResponse() {{
            listBidResponsesWithoutBidsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListBidResponsesWithoutBidsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListBidResponsesWithoutBidsResponse.class);
                res.listBidResponsesWithoutBidsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * adexchangebuyer2BiddersFilterSetsCreate - Creates the specified filter set for the account with the given account ID.
    **/
    public openapisdk.models.operations.Adexchangebuyer2BiddersFilterSetsCreateResponse adexchangebuyer2BiddersFilterSetsCreate(openapisdk.models.operations.Adexchangebuyer2BiddersFilterSetsCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta1/{ownerName}/filterSets", request.pathParams);
        
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

        openapisdk.models.operations.Adexchangebuyer2BiddersFilterSetsCreateResponse res = new openapisdk.models.operations.Adexchangebuyer2BiddersFilterSetsCreateResponse() {{
            filterSet = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.FilterSet out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.FilterSet.class);
                res.filterSet = out;
            }
        }

        return res;
    }
	
	
    /**
     * adexchangebuyer2BiddersFilterSetsDelete - Deletes the requested filter set from the account with the given account ID.
    **/
    public openapisdk.models.operations.Adexchangebuyer2BiddersFilterSetsDeleteResponse adexchangebuyer2BiddersFilterSetsDelete(openapisdk.models.operations.Adexchangebuyer2BiddersFilterSetsDeleteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta1/{name}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
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

        openapisdk.models.operations.Adexchangebuyer2BiddersFilterSetsDeleteResponse res = new openapisdk.models.operations.Adexchangebuyer2BiddersFilterSetsDeleteResponse() {{
            empty = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.empty = out;
            }
        }

        return res;
    }
	
	
    /**
     * adexchangebuyer2BiddersFilterSetsFilteredBidRequestsList - List all reasons that caused a bid request not to be sent for an impression, with the number of bid requests not sent for each reason.
    **/
    public openapisdk.models.operations.Adexchangebuyer2BiddersFilterSetsFilteredBidRequestsListResponse adexchangebuyer2BiddersFilterSetsFilteredBidRequestsList(openapisdk.models.operations.Adexchangebuyer2BiddersFilterSetsFilteredBidRequestsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta1/{filterSetName}/filteredBidRequests", request.pathParams);
        
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

        openapisdk.models.operations.Adexchangebuyer2BiddersFilterSetsFilteredBidRequestsListResponse res = new openapisdk.models.operations.Adexchangebuyer2BiddersFilterSetsFilteredBidRequestsListResponse() {{
            listFilteredBidRequestsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListFilteredBidRequestsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListFilteredBidRequestsResponse.class);
                res.listFilteredBidRequestsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesList - List all creatives associated with a specific reason for which bids were filtered, with the number of bids filtered for each creative.
    **/
    public openapisdk.models.operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListResponse adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesList(openapisdk.models.operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta1/{filterSetName}/filteredBids/{creativeStatusId}/creatives", request.pathParams);
        
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

        openapisdk.models.operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListResponse res = new openapisdk.models.operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListResponse() {{
            listCreativeStatusBreakdownByCreativeResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListCreativeStatusBreakdownByCreativeResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListCreativeStatusBreakdownByCreativeResponse.class);
                res.listCreativeStatusBreakdownByCreativeResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsList - List all details associated with a specific reason for which bids were filtered, with the number of bids filtered for each detail.
    **/
    public openapisdk.models.operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListResponse adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsList(openapisdk.models.operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta1/{filterSetName}/filteredBids/{creativeStatusId}/details", request.pathParams);
        
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

        openapisdk.models.operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListResponse res = new openapisdk.models.operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListResponse() {{
            listCreativeStatusBreakdownByDetailResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListCreativeStatusBreakdownByDetailResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListCreativeStatusBreakdownByDetailResponse.class);
                res.listCreativeStatusBreakdownByDetailResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * adexchangebuyer2BiddersFilterSetsFilteredBidsList - List all reasons for which bids were filtered, with the number of bids filtered for each reason.
    **/
    public openapisdk.models.operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsListResponse adexchangebuyer2BiddersFilterSetsFilteredBidsList(openapisdk.models.operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta1/{filterSetName}/filteredBids", request.pathParams);
        
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

        openapisdk.models.operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsListResponse res = new openapisdk.models.operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsListResponse() {{
            listFilteredBidsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListFilteredBidsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListFilteredBidsResponse.class);
                res.listFilteredBidsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * adexchangebuyer2BiddersFilterSetsGet - Retrieves the requested filter set for the account with the given account ID.
    **/
    public openapisdk.models.operations.Adexchangebuyer2BiddersFilterSetsGetResponse adexchangebuyer2BiddersFilterSetsGet(openapisdk.models.operations.Adexchangebuyer2BiddersFilterSetsGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta1/{name}", request.pathParams);
        
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

        openapisdk.models.operations.Adexchangebuyer2BiddersFilterSetsGetResponse res = new openapisdk.models.operations.Adexchangebuyer2BiddersFilterSetsGetResponse() {{
            filterSet = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.FilterSet out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.FilterSet.class);
                res.filterSet = out;
            }
        }

        return res;
    }
	
	
    /**
     * adexchangebuyer2BiddersFilterSetsImpressionMetricsList - Lists all metrics that are measured in terms of number of impressions.
    **/
    public openapisdk.models.operations.Adexchangebuyer2BiddersFilterSetsImpressionMetricsListResponse adexchangebuyer2BiddersFilterSetsImpressionMetricsList(openapisdk.models.operations.Adexchangebuyer2BiddersFilterSetsImpressionMetricsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta1/{filterSetName}/impressionMetrics", request.pathParams);
        
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

        openapisdk.models.operations.Adexchangebuyer2BiddersFilterSetsImpressionMetricsListResponse res = new openapisdk.models.operations.Adexchangebuyer2BiddersFilterSetsImpressionMetricsListResponse() {{
            listImpressionMetricsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListImpressionMetricsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListImpressionMetricsResponse.class);
                res.listImpressionMetricsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * adexchangebuyer2BiddersFilterSetsList - Lists all filter sets for the account with the given account ID.
    **/
    public openapisdk.models.operations.Adexchangebuyer2BiddersFilterSetsListResponse adexchangebuyer2BiddersFilterSetsList(openapisdk.models.operations.Adexchangebuyer2BiddersFilterSetsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta1/{ownerName}/filterSets", request.pathParams);
        
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

        openapisdk.models.operations.Adexchangebuyer2BiddersFilterSetsListResponse res = new openapisdk.models.operations.Adexchangebuyer2BiddersFilterSetsListResponse() {{
            listFilterSetsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListFilterSetsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListFilterSetsResponse.class);
                res.listFilterSetsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * adexchangebuyer2BiddersFilterSetsLosingBidsList - List all reasons for which bids lost in the auction, with the number of bids that lost for each reason.
    **/
    public openapisdk.models.operations.Adexchangebuyer2BiddersFilterSetsLosingBidsListResponse adexchangebuyer2BiddersFilterSetsLosingBidsList(openapisdk.models.operations.Adexchangebuyer2BiddersFilterSetsLosingBidsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta1/{filterSetName}/losingBids", request.pathParams);
        
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

        openapisdk.models.operations.Adexchangebuyer2BiddersFilterSetsLosingBidsListResponse res = new openapisdk.models.operations.Adexchangebuyer2BiddersFilterSetsLosingBidsListResponse() {{
            listLosingBidsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListLosingBidsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListLosingBidsResponse.class);
                res.listLosingBidsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsList - List all reasons for which winning bids were not billable, with the number of bids not billed for each reason.
    **/
    public openapisdk.models.operations.Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListResponse adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsList(openapisdk.models.operations.Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta1/{filterSetName}/nonBillableWinningBids", request.pathParams);
        
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

        openapisdk.models.operations.Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListResponse res = new openapisdk.models.operations.Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListResponse() {{
            listNonBillableWinningBidsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListNonBillableWinningBidsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListNonBillableWinningBidsResponse.class);
                res.listNonBillableWinningBidsResponse = out;
            }
        }

        return res;
    }
	
}