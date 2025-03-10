/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class ArtifactregistryProjectsLocationsRepositoriesPackagesListResponse {
    
    public String contentType;

    public ArtifactregistryProjectsLocationsRepositoriesPackagesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Successful response
     */
    
    public org.openapis.openapi.models.shared.ListPackagesResponse listPackagesResponse;

    public ArtifactregistryProjectsLocationsRepositoriesPackagesListResponse withListPackagesResponse(org.openapis.openapi.models.shared.ListPackagesResponse listPackagesResponse) {
        this.listPackagesResponse = listPackagesResponse;
        return this;
    }
    
    
    public Integer statusCode;

    public ArtifactregistryProjectsLocationsRepositoriesPackagesListResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public ArtifactregistryProjectsLocationsRepositoriesPackagesListResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public ArtifactregistryProjectsLocationsRepositoriesPackagesListResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
