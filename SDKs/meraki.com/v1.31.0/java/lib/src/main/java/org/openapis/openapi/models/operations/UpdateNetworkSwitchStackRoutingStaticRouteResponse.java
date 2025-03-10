/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import java.net.http.HttpResponse;

public class UpdateNetworkSwitchStackRoutingStaticRouteResponse {
    
    public String contentType;
    public UpdateNetworkSwitchStackRoutingStaticRouteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;
    public UpdateNetworkSwitchStackRoutingStaticRouteResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;
    public UpdateNetworkSwitchStackRoutingStaticRouteResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Successful operation
     */
    
    public java.util.Map<String, Object> updateNetworkSwitchStackRoutingStaticRoute200ApplicationJSONObject;
    public UpdateNetworkSwitchStackRoutingStaticRouteResponse withUpdateNetworkSwitchStackRoutingStaticRoute200ApplicationJSONObject(java.util.Map<String, Object> updateNetworkSwitchStackRoutingStaticRoute200ApplicationJSONObject) {
        this.updateNetworkSwitchStackRoutingStaticRoute200ApplicationJSONObject = updateNetworkSwitchStackRoutingStaticRoute200ApplicationJSONObject;
        return this;
    }
    
}
