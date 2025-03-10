/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class PullsCreateResponse {
    
    public String contentType;

    public PullsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public java.util.Map<String, String[]> headers;

    public PullsCreateResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    
    
    public Integer statusCode;

    public PullsCreateResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public PullsCreateResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Forbidden
     */
    
    public org.openapis.openapi.models.shared.BasicError basicError;

    public PullsCreateResponse withBasicError(org.openapis.openapi.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    
    /**
     * Response
     */
    
    public org.openapis.openapi.models.shared.PullRequest pullRequest;

    public PullsCreateResponse withPullRequest(org.openapis.openapi.models.shared.PullRequest pullRequest) {
        this.pullRequest = pullRequest;
        return this;
    }
    
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    
    public org.openapis.openapi.models.shared.ValidationError validationError;

    public PullsCreateResponse withValidationError(org.openapis.openapi.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
    
    public PullsCreateResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
