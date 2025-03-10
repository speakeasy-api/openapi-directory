/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class MigrationcenterProjectsLocationsImportJobsListResponse {
    
    public String contentType;

    public MigrationcenterProjectsLocationsImportJobsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Successful response
     */
    
    public org.openapis.openapi.models.shared.ListImportJobsResponse listImportJobsResponse;

    public MigrationcenterProjectsLocationsImportJobsListResponse withListImportJobsResponse(org.openapis.openapi.models.shared.ListImportJobsResponse listImportJobsResponse) {
        this.listImportJobsResponse = listImportJobsResponse;
        return this;
    }
    
    
    public Integer statusCode;

    public MigrationcenterProjectsLocationsImportJobsListResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public MigrationcenterProjectsLocationsImportJobsListResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public MigrationcenterProjectsLocationsImportJobsListResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
