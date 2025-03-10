/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class ConnectorsProjectsLocationsProvidersConnectorsListResponse {
    
    public String contentType;

    public ConnectorsProjectsLocationsProvidersConnectorsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Successful response
     */
    
    public org.openapis.openapi.models.shared.ListConnectorsResponse listConnectorsResponse;

    public ConnectorsProjectsLocationsProvidersConnectorsListResponse withListConnectorsResponse(org.openapis.openapi.models.shared.ListConnectorsResponse listConnectorsResponse) {
        this.listConnectorsResponse = listConnectorsResponse;
        return this;
    }
    
    
    public Integer statusCode;

    public ConnectorsProjectsLocationsProvidersConnectorsListResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public ConnectorsProjectsLocationsProvidersConnectorsListResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public ConnectorsProjectsLocationsProvidersConnectorsListResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
