/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class ConnectorsProjectsLocationsGlobalManagedZonesListResponse {
    
    public String contentType;

    public ConnectorsProjectsLocationsGlobalManagedZonesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Successful response
     */
    
    public org.openapis.openapi.models.shared.ListManagedZonesResponse listManagedZonesResponse;

    public ConnectorsProjectsLocationsGlobalManagedZonesListResponse withListManagedZonesResponse(org.openapis.openapi.models.shared.ListManagedZonesResponse listManagedZonesResponse) {
        this.listManagedZonesResponse = listManagedZonesResponse;
        return this;
    }
    
    
    public Integer statusCode;

    public ConnectorsProjectsLocationsGlobalManagedZonesListResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public ConnectorsProjectsLocationsGlobalManagedZonesListResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public ConnectorsProjectsLocationsGlobalManagedZonesListResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
