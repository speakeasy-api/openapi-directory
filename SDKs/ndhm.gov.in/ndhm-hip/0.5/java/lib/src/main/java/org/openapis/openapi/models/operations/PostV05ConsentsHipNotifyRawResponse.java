/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class PostV05ConsentsHipNotifyRawResponse {
    
    public byte[] body;

    public PostV05ConsentsHipNotifyRawResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    
    
    public String contentType;

    public PostV05ConsentsHipNotifyRawResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * **Causes:**
     *   * Invalid/Expired/Empty token.
     * 
     */
    
    public org.openapis.openapi.models.shared.ErrorResponse errorResponse;

    public PostV05ConsentsHipNotifyRawResponse withErrorResponse(org.openapis.openapi.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    
    
    public Integer statusCode;

    public PostV05ConsentsHipNotifyRawResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public PostV05ConsentsHipNotifyRawResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public PostV05ConsentsHipNotifyRawResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
