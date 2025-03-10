/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class UpdateNetworkSwitchSettingsStormControlResponse {
    
    public String contentType;

    public UpdateNetworkSwitchSettingsStormControlResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public UpdateNetworkSwitchSettingsStormControlResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public UpdateNetworkSwitchSettingsStormControlResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Successful operation
     */
    
    public java.util.Map<String, Object> updateNetworkSwitchSettingsStormControl200ApplicationJSONObject;

    public UpdateNetworkSwitchSettingsStormControlResponse withUpdateNetworkSwitchSettingsStormControl200ApplicationJSONObject(java.util.Map<String, Object> updateNetworkSwitchSettingsStormControl200ApplicationJSONObject) {
        this.updateNetworkSwitchSettingsStormControl200ApplicationJSONObject = updateNetworkSwitchSettingsStormControl200ApplicationJSONObject;
        return this;
    }
    
    public UpdateNetworkSwitchSettingsStormControlResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
