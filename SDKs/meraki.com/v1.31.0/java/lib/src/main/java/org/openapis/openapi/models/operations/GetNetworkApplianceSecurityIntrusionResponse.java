/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import java.net.http.HttpResponse;

public class GetNetworkApplianceSecurityIntrusionResponse {
    
    public String contentType;
    public GetNetworkApplianceSecurityIntrusionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;
    public GetNetworkApplianceSecurityIntrusionResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;
    public GetNetworkApplianceSecurityIntrusionResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Successful operation
     */
    
    public java.util.Map<String, Object> getNetworkApplianceSecurityIntrusion200ApplicationJSONObject;
    public GetNetworkApplianceSecurityIntrusionResponse withGetNetworkApplianceSecurityIntrusion200ApplicationJSONObject(java.util.Map<String, Object> getNetworkApplianceSecurityIntrusion200ApplicationJSONObject) {
        this.getNetworkApplianceSecurityIntrusion200ApplicationJSONObject = getNetworkApplianceSecurityIntrusion200ApplicationJSONObject;
        return this;
    }
    
}
