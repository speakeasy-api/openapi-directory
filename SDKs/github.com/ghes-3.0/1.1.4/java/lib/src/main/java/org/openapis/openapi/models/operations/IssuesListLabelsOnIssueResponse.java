/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class IssuesListLabelsOnIssueResponse {
    
    public String contentType;

    public IssuesListLabelsOnIssueResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public java.util.Map<String, String[]> headers;

    public IssuesListLabelsOnIssueResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    
    
    public Integer statusCode;

    public IssuesListLabelsOnIssueResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public IssuesListLabelsOnIssueResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Gone
     */
    
    public org.openapis.openapi.models.shared.BasicError basicError;

    public IssuesListLabelsOnIssueResponse withBasicError(org.openapis.openapi.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    
    /**
     * Response
     */
    
    public org.openapis.openapi.models.shared.Label[] labels;

    public IssuesListLabelsOnIssueResponse withLabels(org.openapis.openapi.models.shared.Label[] labels) {
        this.labels = labels;
        return this;
    }
    
    public IssuesListLabelsOnIssueResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
