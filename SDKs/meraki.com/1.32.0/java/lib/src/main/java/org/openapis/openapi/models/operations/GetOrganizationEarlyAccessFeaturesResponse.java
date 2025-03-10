/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class GetOrganizationEarlyAccessFeaturesResponse {
    
    public String contentType;

    public GetOrganizationEarlyAccessFeaturesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public GetOrganizationEarlyAccessFeaturesResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public GetOrganizationEarlyAccessFeaturesResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Successful operation
     */
    
    public java.util.Map<String, Object>[] getOrganizationEarlyAccessFeatures200ApplicationJSONObjects;

    public GetOrganizationEarlyAccessFeaturesResponse withGetOrganizationEarlyAccessFeatures200ApplicationJSONObjects(java.util.Map<String, Object>[] getOrganizationEarlyAccessFeatures200ApplicationJSONObjects) {
        this.getOrganizationEarlyAccessFeatures200ApplicationJSONObjects = getOrganizationEarlyAccessFeatures200ApplicationJSONObjects;
        return this;
    }
    
    public GetOrganizationEarlyAccessFeaturesResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
