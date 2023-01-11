package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import org.apache.http.NameValuePair;

public class ReverseGeocoding {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public ReverseGeocoding(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getSearchVersionNumberReverseGeocodeCrossStreetPositionExt - Cross Street lookup
    **/
    public openapisdk.models.operations.GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtResponse getSearchVersionNumberReverseGeocodeCrossStreetPositionExt(openapisdk.models.operations.GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/search/{versionNumber}/reverseGeocode/crossStreet/{position}.{ext}", request.pathParams);
        
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

        openapisdk.models.operations.GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtResponse res = new openapisdk.models.operations.GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtResponse() {{
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
     * getSearchVersionNumberReverseGeocodePositionExt - Reverse Geocode
    **/
    public openapisdk.models.operations.GetSearchVersionNumberReverseGeocodePositionExtResponse getSearchVersionNumberReverseGeocodePositionExt(openapisdk.models.operations.GetSearchVersionNumberReverseGeocodePositionExtRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/search/{versionNumber}/reverseGeocode/{position}.{ext}", request.pathParams);
        
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

        openapisdk.models.operations.GetSearchVersionNumberReverseGeocodePositionExtResponse res = new openapisdk.models.operations.GetSearchVersionNumberReverseGeocodePositionExtResponse() {{
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