package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Routing {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Routing(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getRoutingVersionNumberCalculateReachableRangeOriginContentType - Reachable Range
     *
     * Calculates a set of locations that can be reached from the origin point.
    **/
    public openapisdk.models.operations.GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse getRoutingVersionNumberCalculateReachableRangeOriginContentType(openapisdk.models.operations.GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/routing/{versionNumber}/calculateReachableRange/{origin}/{contentType}", request.pathParams);
        
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

        openapisdk.models.operations.GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse res = new openapisdk.models.operations.GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 408) {
        }
        else if (httpRes.statusCode() == 414) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }
        else if (httpRes.statusCode() == 504) {
        }
        else if (httpRes.statusCode() == 596) {
        }

        return res;
    }
	
	
    /**
     * getRoutingVersionNumberCalculateRouteLocationsContentType - Calculate Route
     *
     * Calculates a route between an origin and a destination.
    **/
    public openapisdk.models.operations.GetRoutingVersionNumberCalculateRouteLocationsContentTypeResponse getRoutingVersionNumberCalculateRouteLocationsContentType(openapisdk.models.operations.GetRoutingVersionNumberCalculateRouteLocationsContentTypeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/routing/{versionNumber}/calculateRoute/{locations}/{contentType}", request.pathParams);
        
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

        openapisdk.models.operations.GetRoutingVersionNumberCalculateRouteLocationsContentTypeResponse res = new openapisdk.models.operations.GetRoutingVersionNumberCalculateRouteLocationsContentTypeResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 408) {
        }
        else if (httpRes.statusCode() == 414) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }
        else if (httpRes.statusCode() == 504) {
        }
        else if (httpRes.statusCode() == 596) {
        }

        return res;
    }
	
	
    /**
     * postRoutingVersionNumberCalculateReachableRangeOriginContentType - Reachable Range
     *
     * Calculates a set of locations that can be reached from the origin point. POST method handles additionally parameters: <em>supportingPoints</em>, <em>allowVignette</em>, <em>avoidVignette</em>, <em>avoidAreas</em>.
    **/
    public openapisdk.models.operations.PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse postRoutingVersionNumberCalculateReachableRangeOriginContentType(openapisdk.models.operations.PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/routing/{versionNumber}/calculateReachableRange/{origin}/{contentType}", request.pathParams);
        
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

        openapisdk.models.operations.PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse res = new openapisdk.models.operations.PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 408) {
        }
        else if (httpRes.statusCode() == 414) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }
        else if (httpRes.statusCode() == 504) {
        }
        else if (httpRes.statusCode() == 596) {
        }

        return res;
    }
	
	
    /**
     * postRoutingVersionNumberCalculateRouteLocationsContentType - Calculate Route
     *
     * Calculates a route between an origin and a destination. POST method handles additionally parameters: <em>supportingPoints</em>, <em>allowVignette</em>, <em>avoidVignette</em>, <em>avoidAreas</em>.
    **/
    public openapisdk.models.operations.PostRoutingVersionNumberCalculateRouteLocationsContentTypeResponse postRoutingVersionNumberCalculateRouteLocationsContentType(openapisdk.models.operations.PostRoutingVersionNumberCalculateRouteLocationsContentTypeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/routing/{versionNumber}/calculateRoute/{locations}/{contentType}", request.pathParams);
        
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

        openapisdk.models.operations.PostRoutingVersionNumberCalculateRouteLocationsContentTypeResponse res = new openapisdk.models.operations.PostRoutingVersionNumberCalculateRouteLocationsContentTypeResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 408) {
        }
        else if (httpRes.statusCode() == 414) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }
        else if (httpRes.statusCode() == 504) {
        }
        else if (httpRes.statusCode() == 596) {
        }

        return res;
    }
	
}