/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class PostV05ConsentRequestsOnInitJsonResponse {
    
    public byte[] body;

    public PostV05ConsentRequestsOnInitJsonResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    
    
    public String contentType;

    public PostV05ConsentRequestsOnInitJsonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * **Causes:**
     *   * Invalid data sent
     * 
     */
    
    public org.openapis.openapi.models.shared.ErrorResponse errorResponse;

    public PostV05ConsentRequestsOnInitJsonResponse withErrorResponse(org.openapis.openapi.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    
    
    public Integer statusCode;

    public PostV05ConsentRequestsOnInitJsonResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public PostV05ConsentRequestsOnInitJsonResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public PostV05ConsentRequestsOnInitJsonResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
