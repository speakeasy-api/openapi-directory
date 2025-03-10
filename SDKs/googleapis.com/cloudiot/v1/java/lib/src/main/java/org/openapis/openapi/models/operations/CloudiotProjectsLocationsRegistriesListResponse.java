/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class CloudiotProjectsLocationsRegistriesListResponse {
    
    public String contentType;

    public CloudiotProjectsLocationsRegistriesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Successful response
     */
    
    public org.openapis.openapi.models.shared.ListDeviceRegistriesResponse listDeviceRegistriesResponse;

    public CloudiotProjectsLocationsRegistriesListResponse withListDeviceRegistriesResponse(org.openapis.openapi.models.shared.ListDeviceRegistriesResponse listDeviceRegistriesResponse) {
        this.listDeviceRegistriesResponse = listDeviceRegistriesResponse;
        return this;
    }
    
    
    public Integer statusCode;

    public CloudiotProjectsLocationsRegistriesListResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public CloudiotProjectsLocationsRegistriesListResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public CloudiotProjectsLocationsRegistriesListResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
