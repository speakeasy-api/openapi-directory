/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class ComputeRegionTargetHttpsProxiesDeleteResponse {
    
    public String contentType;

    public ComputeRegionTargetHttpsProxiesDeleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Successful response
     */
    
    public org.openapis.openapi.models.shared.Operation operation;

    public ComputeRegionTargetHttpsProxiesDeleteResponse withOperation(org.openapis.openapi.models.shared.Operation operation) {
        this.operation = operation;
        return this;
    }
    
    
    public Integer statusCode;

    public ComputeRegionTargetHttpsProxiesDeleteResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public ComputeRegionTargetHttpsProxiesDeleteResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public ComputeRegionTargetHttpsProxiesDeleteResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
