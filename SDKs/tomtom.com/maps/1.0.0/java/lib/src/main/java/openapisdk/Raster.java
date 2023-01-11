package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import org.apache.http.NameValuePair;

public class Raster {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Raster(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getMapVersionNumberStaticimage - Static Image
     *
     * The Static Image service renders a rectangular raster image
     * in the style, size, and zoom level specified. The image can be requested
     * using either a center point plus width and height or a bounding box.
    **/
    public openapisdk.models.operations.GetMapVersionNumberStaticimageResponse getMapVersionNumberStaticimage(openapisdk.models.operations.GetMapVersionNumberStaticimageRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/map/{versionNumber}/staticimage", request.pathParams);
        
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

        openapisdk.models.operations.GetMapVersionNumberStaticimageResponse res = new openapisdk.models.operations.GetMapVersionNumberStaticimageResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getMapVersionNumberTileLayerStyleZoomXYFormat - Tile
     *
     * The Maps API Raster Service delivers raster tiles, which are representations of square sections of map data.
    **/
    public openapisdk.models.operations.GetMapVersionNumberTileLayerStyleZoomXYFormatResponse getMapVersionNumberTileLayerStyleZoomXYFormat(openapisdk.models.operations.GetMapVersionNumberTileLayerStyleZoomXYFormatRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/map/{versionNumber}/tile/{layer}/{style}/{zoom}/{X}/{Y}.{format}", request.pathParams);
        
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

        openapisdk.models.operations.GetMapVersionNumberTileLayerStyleZoomXYFormatResponse res = new openapisdk.models.operations.GetMapVersionNumberTileLayerStyleZoomXYFormatResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 302) {
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
	
}