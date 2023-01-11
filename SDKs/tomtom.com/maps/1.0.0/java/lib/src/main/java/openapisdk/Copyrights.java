package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import org.apache.http.NameValuePair;

public class Copyrights {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Copyrights(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getMapVersionNumberCopyrightsFormat - Copyrights whole world
     *
     * The Copyrights API returns copyright information for
     * the Maps API Raster Tile Service in JSON, JSONP, or XML format.
     * This call returns copyright information for the whole world.
    **/
    public openapisdk.models.operations.GetMapVersionNumberCopyrightsFormatResponse getMapVersionNumberCopyrightsFormat(openapisdk.models.operations.GetMapVersionNumberCopyrightsFormatRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/map/{versionNumber}/copyrights.{format}", request.pathParams);
        
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

        openapisdk.models.operations.GetMapVersionNumberCopyrightsFormatResponse res = new openapisdk.models.operations.GetMapVersionNumberCopyrightsFormatResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 304) {
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 410) {
        }
        else if (httpRes.statusCode() == 500) {
        }

        return res;
    }
	
	
    /**
     * getMapVersionNumberCopyrightsCaptionFormat - Captions
     *
     * This API returns copyright captions for the map service.
    **/
    public openapisdk.models.operations.GetMapVersionNumberCopyrightsCaptionFormatResponse getMapVersionNumberCopyrightsCaptionFormat(openapisdk.models.operations.GetMapVersionNumberCopyrightsCaptionFormatRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/map/{versionNumber}/copyrights/caption.{format}", request.pathParams);
        
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

        openapisdk.models.operations.GetMapVersionNumberCopyrightsCaptionFormatResponse res = new openapisdk.models.operations.GetMapVersionNumberCopyrightsCaptionFormatResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 304) {
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 410) {
        }
        else if (httpRes.statusCode() == 500) {
        }

        return res;
    }
	
	
    /**
     * getMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormat - Copyrights bounding box
     *
     * The Copyrights API returns copyright information for
     * the Maps API Raster Tile Service in JSON, JSONP, or XML format.
     * This call returns copyright information for a specific bounding box.
    **/
    public openapisdk.models.operations.GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatResponse getMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormat(openapisdk.models.operations.GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/map/{versionNumber}/copyrights/{minLon}/{minLat}/{maxLon}/{maxLat}.{format}", request.pathParams);
        
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

        openapisdk.models.operations.GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatResponse res = new openapisdk.models.operations.GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 304) {
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 410) {
        }
        else if (httpRes.statusCode() == 500) {
        }

        return res;
    }
	
	
    /**
     * getMapVersionNumberCopyrightsZoomXYFormat - Copyrights tile
     *
     * The Copyrights API returns copyright information for
     * the Maps API Raster Tile Service in JSON, JSONP, or XML format.
     * This call returns copyright information for the a specific map tile.
    **/
    public openapisdk.models.operations.GetMapVersionNumberCopyrightsZoomXYFormatResponse getMapVersionNumberCopyrightsZoomXYFormat(openapisdk.models.operations.GetMapVersionNumberCopyrightsZoomXYFormatRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/map/{versionNumber}/copyrights/{zoom}/{X}/{Y}.{format}", request.pathParams);
        
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

        openapisdk.models.operations.GetMapVersionNumberCopyrightsZoomXYFormatResponse res = new openapisdk.models.operations.GetMapVersionNumberCopyrightsZoomXYFormatResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 304) {
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 410) {
        }
        else if (httpRes.statusCode() == 500) {
        }

        return res;
    }
	
}