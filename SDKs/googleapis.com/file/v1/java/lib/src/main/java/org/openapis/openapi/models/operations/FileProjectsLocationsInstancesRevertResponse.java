/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class FileProjectsLocationsInstancesRevertResponse {
    
    public String contentType;

    public FileProjectsLocationsInstancesRevertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Successful response
     */
    
    public org.openapis.openapi.models.shared.Operation operation;

    public FileProjectsLocationsInstancesRevertResponse withOperation(org.openapis.openapi.models.shared.Operation operation) {
        this.operation = operation;
        return this;
    }
    
    
    public Integer statusCode;

    public FileProjectsLocationsInstancesRevertResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public FileProjectsLocationsInstancesRevertResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public FileProjectsLocationsInstancesRevertResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
