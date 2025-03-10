/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class GetGeofencesResponse {
    
    public String contentType;

    public GetGeofencesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * OK
     */
    
    public org.openapis.openapi.models.shared.Geofence[] geofences;

    public GetGeofencesResponse withGeofences(org.openapis.openapi.models.shared.Geofence[] geofences) {
        this.geofences = geofences;
        return this;
    }
    
    
    public Integer statusCode;

    public GetGeofencesResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public GetGeofencesResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public GetGeofencesResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
