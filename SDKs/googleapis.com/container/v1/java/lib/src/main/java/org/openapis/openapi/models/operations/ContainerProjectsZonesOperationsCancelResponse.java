/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class ContainerProjectsZonesOperationsCancelResponse {
    
    public String contentType;

    public ContainerProjectsZonesOperationsCancelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Successful response
     */
    
    public java.util.Map<String, Object> empty;

    public ContainerProjectsZonesOperationsCancelResponse withEmpty(java.util.Map<String, Object> empty) {
        this.empty = empty;
        return this;
    }
    
    
    public Integer statusCode;

    public ContainerProjectsZonesOperationsCancelResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public ContainerProjectsZonesOperationsCancelResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public ContainerProjectsZonesOperationsCancelResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
