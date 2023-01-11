package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import org.apache.http.NameValuePair;

public class WmsWmts {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public WmsWmts(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getCapabilities - GetCapabilities
     *
     * The GetCapabilities call is part of TomTom's implementation of version 1.1.1
     * the Web Map Service (WMS). It provides descriptions of the other calls
     * that are available in the implementation.
    **/
    public openapisdk.models.operations.GetCapabilitiesResponse getCapabilities(openapisdk.models.operations.GetCapabilitiesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/map/{versionNumber}/wms//", request.pathParams);
        
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

        openapisdk.models.operations.GetCapabilitiesResponse res = new openapisdk.models.operations.GetCapabilitiesResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 202) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 500) {
        }

        return res;
    }
	
	
    /**
     * getMap - GetMap
     *
     * The GetMap call implements the Web Map Service 1.1.1 standard
     * to access TomTom raster map tiles. This service is described
     * in the response to the GetCapabilities API call.
    **/
    public openapisdk.models.operations.GetMapResponse getMap(openapisdk.models.operations.GetMapRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/map/{versionNumber}/wms/", request.pathParams);
        
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

        openapisdk.models.operations.GetMapResponse res = new openapisdk.models.operations.GetMapResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 202) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 500) {
        }

        return res;
    }
	
	
    /**
     * getMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXml - WMTS
     *
     * The WMTS GetCapabilities call implements version 1.0.0 of
     * the <a href="http://www.opengeospatial.org/standards/wmts">Web Map Tile Service</a>
     * (WMTS) standard. It returns metadata that allows compatible calling systems to construct
     * calls to TomTom's raster map tile service. See the
     * <a href="/maps-api/maps-api-documentation-raster/wmts">documentation</a>
     * for more information on WMTS.
    **/
    public openapisdk.models.operations.GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlResponse getMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXml(openapisdk.models.operations.GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/map/{versionNumber}/wmts/{key}/{wmtsVersion}/WMTSCapabilities.xml", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlResponse res = new openapisdk.models.operations.GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 500) {
        }

        return res;
    }
	
}