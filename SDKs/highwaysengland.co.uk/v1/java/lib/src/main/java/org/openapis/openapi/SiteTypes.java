/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import org.openapis.openapi.utils.HTTPClient;
import org.openapis.openapi.utils.HTTPRequest;
import org.openapis.openapi.utils.JSON;

public class SiteTypes {
	
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public SiteTypes(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}

    /**
     * Returns the layer metadata for the LayerId specified.
     * @param request the request object containing all of the parameters for the API call
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.SiteTypesGetSitesForPublicFacingAPIResponse siteTypesGetSitesForPublicFacingAPI(org.openapis.openapi.models.operations.SiteTypesGetSitesForPublicFacingAPIRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.SiteTypesGetSitesForPublicFacingAPIRequest.class, baseUrl, "/v{version}/sitetypes/{siteType_Id}/sites", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.SiteTypesGetSitesForPublicFacingAPIResponse res = new org.openapis.openapi.models.operations.SiteTypesGetSitesForPublicFacingAPIResponse(contentType, httpRes.statusCode()) {{
            siteTypeLayer = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.SiteTypeLayer out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.SiteTypeLayer.class);
                res.siteTypeLayer = out;
            }
        }
        else if (httpRes.statusCode() == 400 || httpRes.statusCode() == 404 || httpRes.statusCode() == 500) {
        }

        return res;
    }

    /**
     * Return list of site types
     * @param request the request object containing all of the parameters for the API call
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.SiteTypesIndexResponse siteTypesIndex(org.openapis.openapi.models.operations.SiteTypesIndexRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.SiteTypesIndexRequest.class, baseUrl, "/v{version}/sitetypes", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.SiteTypesIndexResponse res = new org.openapis.openapi.models.operations.SiteTypesIndexResponse(contentType, httpRes.statusCode()) {{
            siteTypeResponse = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.SiteTypeResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.SiteTypeResponse.class);
                res.siteTypeResponse = out;
            }
        }
        else if (httpRes.statusCode() == 400 || httpRes.statusCode() == 500) {
        }

        return res;
    }
}