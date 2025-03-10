/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class ClouddeployProjectsLocationsTargetsListResponse {
    
    public String contentType;

    public ClouddeployProjectsLocationsTargetsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Successful response
     */
    
    public org.openapis.openapi.models.shared.ListTargetsResponse listTargetsResponse;

    public ClouddeployProjectsLocationsTargetsListResponse withListTargetsResponse(org.openapis.openapi.models.shared.ListTargetsResponse listTargetsResponse) {
        this.listTargetsResponse = listTargetsResponse;
        return this;
    }
    
    
    public Integer statusCode;

    public ClouddeployProjectsLocationsTargetsListResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public ClouddeployProjectsLocationsTargetsListResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public ClouddeployProjectsLocationsTargetsListResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
