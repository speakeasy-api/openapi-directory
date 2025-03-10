/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class GetNetworkAlertsSettingsResponse {
    
    public String contentType;

    public GetNetworkAlertsSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public GetNetworkAlertsSettingsResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public GetNetworkAlertsSettingsResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Successful operation
     */
    
    public java.util.Map<String, Object> getNetworkAlertsSettings200ApplicationJSONObject;

    public GetNetworkAlertsSettingsResponse withGetNetworkAlertsSettings200ApplicationJSONObject(java.util.Map<String, Object> getNetworkAlertsSettings200ApplicationJSONObject) {
        this.getNetworkAlertsSettings200ApplicationJSONObject = getNetworkAlertsSettings200ApplicationJSONObject;
        return this;
    }
    
    public GetNetworkAlertsSettingsResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
