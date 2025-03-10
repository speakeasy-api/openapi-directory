/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class GetSetupV1LocationsResponse {
    
    public String contentType;

    public GetSetupV1LocationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.LocationListViewModel locationListViewModel;

    public GetSetupV1LocationsResponse withLocationListViewModel(org.openapis.openapi.models.shared.LocationListViewModel locationListViewModel) {
        this.locationListViewModel = locationListViewModel;
        return this;
    }
    
    
    public Integer statusCode;

    public GetSetupV1LocationsResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public GetSetupV1LocationsResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public GetSetupV1LocationsResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
