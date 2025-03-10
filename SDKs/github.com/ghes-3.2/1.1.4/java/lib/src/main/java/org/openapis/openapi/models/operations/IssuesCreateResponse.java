/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class IssuesCreateResponse {
    
    public String contentType;

    public IssuesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public java.util.Map<String, String[]> headers;

    public IssuesCreateResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    
    
    public Integer statusCode;

    public IssuesCreateResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public IssuesCreateResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Forbidden
     */
    
    public org.openapis.openapi.models.shared.BasicError basicError;

    public IssuesCreateResponse withBasicError(org.openapis.openapi.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    
    /**
     * Response
     */
    
    public org.openapis.openapi.models.shared.Issue issue;

    public IssuesCreateResponse withIssue(org.openapis.openapi.models.shared.Issue issue) {
        this.issue = issue;
        return this;
    }
    
    /**
     * Service unavailable
     */
    
    public IssuesCreate503ApplicationJSON issuesCreate503ApplicationJSONObject;

    public IssuesCreateResponse withIssuesCreate503ApplicationJSONObject(IssuesCreate503ApplicationJSON issuesCreate503ApplicationJSONObject) {
        this.issuesCreate503ApplicationJSONObject = issuesCreate503ApplicationJSONObject;
        return this;
    }
    
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    
    public org.openapis.openapi.models.shared.ValidationError validationError;

    public IssuesCreateResponse withValidationError(org.openapis.openapi.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
    
    public IssuesCreateResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
