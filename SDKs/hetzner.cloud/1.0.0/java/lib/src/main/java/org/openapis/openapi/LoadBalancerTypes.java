/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;
import org.openapis.openapi.utils.HTTPClient;
import org.openapis.openapi.utils.HTTPRequest;
import org.openapis.openapi.utils.JSON;

/**
 * Load Balancer types define kinds of Load Balancers offered. Each type has an hourly and a monthly cost. You will pay whichever amount is lower for your usage of this specific Load Balancer. Costs may differ between Locations.
 * 
 * Currency for all amounts is \u20ac. All prices exclude VAT.
 * 
 */
public class LoadBalancerTypes {
	
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public LoadBalancerTypes(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}

    /**
     * Get all Load Balancer Types
     * Gets all Load Balancer type objects.
     * @param request the request object containing all of the parameters for the API call
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.GetLoadBalancerTypesResponse getLoadBalancerTypes(org.openapis.openapi.models.operations.GetLoadBalancerTypesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(baseUrl, "/load_balancer_types");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = org.openapis.openapi.utils.Utils.getQueryParams(org.openapis.openapi.models.operations.GetLoadBalancerTypesRequest.class, request, null);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.GetLoadBalancerTypesResponse res = new org.openapis.openapi.models.operations.GetLoadBalancerTypesResponse(contentType, httpRes.statusCode()) {{
            getLoadBalancerTypes200ApplicationJSONObject = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.operations.GetLoadBalancerTypes200ApplicationJSON out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.operations.GetLoadBalancerTypes200ApplicationJSON.class);
                res.getLoadBalancerTypes200ApplicationJSONObject = out;
            }
        }

        return res;
    }

    /**
     * Get a Load Balancer Type
     * Gets a specific Load Balancer type object.
     * @param request the request object containing all of the parameters for the API call
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.GetLoadBalancerTypesIdResponse getLoadBalancerTypesId(org.openapis.openapi.models.operations.GetLoadBalancerTypesIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.GetLoadBalancerTypesIdRequest.class, baseUrl, "/load_balancer_types/{id}", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.GetLoadBalancerTypesIdResponse res = new org.openapis.openapi.models.operations.GetLoadBalancerTypesIdResponse(contentType, httpRes.statusCode()) {{
            getLoadBalancerTypesId200ApplicationJSONObject = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.operations.GetLoadBalancerTypesId200ApplicationJSON out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.operations.GetLoadBalancerTypesId200ApplicationJSON.class);
                res.getLoadBalancerTypesId200ApplicationJSONObject = out;
            }
        }

        return res;
    }
}