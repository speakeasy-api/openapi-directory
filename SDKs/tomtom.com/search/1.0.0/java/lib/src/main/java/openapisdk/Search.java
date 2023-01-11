package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Search {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Search(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getSearchVersionNumberCSCategoryExt - Low Bandwith Category Search
    **/
    public openapisdk.models.operations.GetSearchVersionNumberCSCategoryExtResponse getSearchVersionNumberCSCategoryExt(openapisdk.models.operations.GetSearchVersionNumberCSCategoryExtRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/search/{versionNumber}/cS/{category}.{ext}", request.pathParams);
        
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

        openapisdk.models.operations.GetSearchVersionNumberCSCategoryExtResponse res = new openapisdk.models.operations.GetSearchVersionNumberCSCategoryExtResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 596) {
        }
        else if (httpRes.statusCode() >= 500 && httpRes.statusCode() < 600) {
        }

        return res;
    }
	
	
    /**
     * getSearchVersionNumberCategorySearchQueryExt - Category Search
    **/
    public openapisdk.models.operations.GetSearchVersionNumberCategorySearchQueryExtResponse getSearchVersionNumberCategorySearchQueryExt(openapisdk.models.operations.GetSearchVersionNumberCategorySearchQueryExtRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/search/{versionNumber}/categorySearch/{query}.{ext}", request.pathParams);
        
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

        openapisdk.models.operations.GetSearchVersionNumberCategorySearchQueryExtResponse res = new openapisdk.models.operations.GetSearchVersionNumberCategorySearchQueryExtResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 596) {
        }
        else if (httpRes.statusCode() >= 500 && httpRes.statusCode() < 600) {
        }

        return res;
    }
	
	
    /**
     * getSearchVersionNumberGeometrySearchQueryExt - Geometry Search
    **/
    public openapisdk.models.operations.GetSearchVersionNumberGeometrySearchQueryExtResponse getSearchVersionNumberGeometrySearchQueryExt(openapisdk.models.operations.GetSearchVersionNumberGeometrySearchQueryExtRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/search/{versionNumber}/geometrySearch/{query}.{ext}", request.pathParams);
        
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

        openapisdk.models.operations.GetSearchVersionNumberGeometrySearchQueryExtResponse res = new openapisdk.models.operations.GetSearchVersionNumberGeometrySearchQueryExtResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 596) {
        }
        else if (httpRes.statusCode() >= 500 && httpRes.statusCode() < 600) {
        }

        return res;
    }
	
	
    /**
     * getSearchVersionNumberNearbySearchExt - Nearby Search
    **/
    public openapisdk.models.operations.GetSearchVersionNumberNearbySearchExtResponse getSearchVersionNumberNearbySearchExt(openapisdk.models.operations.GetSearchVersionNumberNearbySearchExtRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/search/{versionNumber}/nearbySearch/.{ext}", request.pathParams);
        
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

        openapisdk.models.operations.GetSearchVersionNumberNearbySearchExtResponse res = new openapisdk.models.operations.GetSearchVersionNumberNearbySearchExtResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 596) {
        }
        else if (httpRes.statusCode() >= 500 && httpRes.statusCode() < 600) {
        }

        return res;
    }
	
	
    /**
     * getSearchVersionNumberPoiSearchQueryExt - Points of Interest Search
    **/
    public openapisdk.models.operations.GetSearchVersionNumberPoiSearchQueryExtResponse getSearchVersionNumberPoiSearchQueryExt(openapisdk.models.operations.GetSearchVersionNumberPoiSearchQueryExtRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/search/{versionNumber}/poiSearch/{query}.{ext}", request.pathParams);
        
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

        openapisdk.models.operations.GetSearchVersionNumberPoiSearchQueryExtResponse res = new openapisdk.models.operations.GetSearchVersionNumberPoiSearchQueryExtResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 596) {
        }
        else if (httpRes.statusCode() >= 500 && httpRes.statusCode() < 600) {
        }

        return res;
    }
	
	
    /**
     * getSearchVersionNumberRoutedSearchQueryPositionHeadingExt - Routed Search
    **/
    public openapisdk.models.operations.GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtResponse getSearchVersionNumberRoutedSearchQueryPositionHeadingExt(openapisdk.models.operations.GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/search/{versionNumber}/routedSearch/{query}/{position}/{heading}.{ext}", request.pathParams);
        
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

        openapisdk.models.operations.GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtResponse res = new openapisdk.models.operations.GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 596) {
        }
        else if (httpRes.statusCode() >= 500 && httpRes.statusCode() < 600) {
        }

        return res;
    }
	
	
    /**
     * getSearchVersionNumberSQueryExt - Low bandwith Search
    **/
    public openapisdk.models.operations.GetSearchVersionNumberSQueryExtResponse getSearchVersionNumberSQueryExt(openapisdk.models.operations.GetSearchVersionNumberSQueryExtRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/search/{versionNumber}/s/{query}.{ext}", request.pathParams);
        
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

        openapisdk.models.operations.GetSearchVersionNumberSQueryExtResponse res = new openapisdk.models.operations.GetSearchVersionNumberSQueryExtResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 596) {
        }
        else if (httpRes.statusCode() >= 500 && httpRes.statusCode() < 600) {
        }

        return res;
    }
	
	
    /**
     * getSearchVersionNumberSearchQueryExt - Fuzzy Search
    **/
    public openapisdk.models.operations.GetSearchVersionNumberSearchQueryExtResponse getSearchVersionNumberSearchQueryExt(openapisdk.models.operations.GetSearchVersionNumberSearchQueryExtRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/search/{versionNumber}/search/{query}.{ext}", request.pathParams);
        
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

        openapisdk.models.operations.GetSearchVersionNumberSearchQueryExtResponse res = new openapisdk.models.operations.GetSearchVersionNumberSearchQueryExtResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 596) {
        }
        else if (httpRes.statusCode() >= 500 && httpRes.statusCode() < 600) {
        }

        return res;
    }
	
	
    /**
     * postSearchVersionNumberGeometrySearchQueryExt - Geometry Search
    **/
    public openapisdk.models.operations.PostSearchVersionNumberGeometrySearchQueryExtResponse postSearchVersionNumberGeometrySearchQueryExt(openapisdk.models.operations.PostSearchVersionNumberGeometrySearchQueryExtRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/search/{versionNumber}/geometrySearch/{query}.{ext}", request.pathParams);
        
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
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostSearchVersionNumberGeometrySearchQueryExtResponse res = new openapisdk.models.operations.PostSearchVersionNumberGeometrySearchQueryExtResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 596) {
        }
        else if (httpRes.statusCode() >= 500 && httpRes.statusCode() < 600) {
        }

        return res;
    }
	
	
    /**
     * postSearchVersionNumberSearchAlongRouteQueryExt - Along Route Search
    **/
    public openapisdk.models.operations.PostSearchVersionNumberSearchAlongRouteQueryExtResponse postSearchVersionNumberSearchAlongRouteQueryExt(openapisdk.models.operations.PostSearchVersionNumberSearchAlongRouteQueryExtRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/search/{versionNumber}/searchAlongRoute/{query}.{ext}", request.pathParams);
        
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
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostSearchVersionNumberSearchAlongRouteQueryExtResponse res = new openapisdk.models.operations.PostSearchVersionNumberSearchAlongRouteQueryExtResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 596) {
        }
        else if (httpRes.statusCode() >= 500 && httpRes.statusCode() < 600) {
        }

        return res;
    }
	
}