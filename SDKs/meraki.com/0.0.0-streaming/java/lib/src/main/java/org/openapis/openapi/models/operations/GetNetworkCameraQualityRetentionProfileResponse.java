/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class GetNetworkCameraQualityRetentionProfileResponse {
    
    public String contentType;

    public GetNetworkCameraQualityRetentionProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public GetNetworkCameraQualityRetentionProfileResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public GetNetworkCameraQualityRetentionProfileResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Successful operation
     */
    
    public java.util.Map<String, Object> getNetworkCameraQualityRetentionProfile200ApplicationJSONObject;

    public GetNetworkCameraQualityRetentionProfileResponse withGetNetworkCameraQualityRetentionProfile200ApplicationJSONObject(java.util.Map<String, Object> getNetworkCameraQualityRetentionProfile200ApplicationJSONObject) {
        this.getNetworkCameraQualityRetentionProfile200ApplicationJSONObject = getNetworkCameraQualityRetentionProfile200ApplicationJSONObject;
        return this;
    }
    
    public GetNetworkCameraQualityRetentionProfileResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
