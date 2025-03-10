/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class ContentOrderreturnsListResponse {
    
    public String contentType;

    public ContentOrderreturnsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Successful response
     */
    
    public org.openapis.openapi.models.shared.OrderreturnsListResponse orderreturnsListResponse;

    public ContentOrderreturnsListResponse withOrderreturnsListResponse(org.openapis.openapi.models.shared.OrderreturnsListResponse orderreturnsListResponse) {
        this.orderreturnsListResponse = orderreturnsListResponse;
        return this;
    }
    
    
    public Integer statusCode;

    public ContentOrderreturnsListResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public ContentOrderreturnsListResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public ContentOrderreturnsListResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
