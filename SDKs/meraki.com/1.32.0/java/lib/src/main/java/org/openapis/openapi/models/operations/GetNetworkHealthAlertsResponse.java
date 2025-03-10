/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class GetNetworkHealthAlertsResponse {
    
    public String contentType;

    public GetNetworkHealthAlertsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public GetNetworkHealthAlertsResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public GetNetworkHealthAlertsResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Successful operation
     */
    
    public GetNetworkHealthAlerts200ApplicationJSON[] getNetworkHealthAlerts200ApplicationJSONObjects;

    public GetNetworkHealthAlertsResponse withGetNetworkHealthAlerts200ApplicationJSONObjects(GetNetworkHealthAlerts200ApplicationJSON[] getNetworkHealthAlerts200ApplicationJSONObjects) {
        this.getNetworkHealthAlerts200ApplicationJSONObjects = getNetworkHealthAlerts200ApplicationJSONObjects;
        return this;
    }
    
    public GetNetworkHealthAlertsResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
