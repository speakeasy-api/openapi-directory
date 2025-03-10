/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class PullsDeleteReviewCommentResponse {
    
    public String contentType;

    public PullsDeleteReviewCommentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public PullsDeleteReviewCommentResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public PullsDeleteReviewCommentResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Resource not found
     */
    
    public org.openapis.openapi.models.shared.BasicError basicError;

    public PullsDeleteReviewCommentResponse withBasicError(org.openapis.openapi.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    
    public PullsDeleteReviewCommentResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
