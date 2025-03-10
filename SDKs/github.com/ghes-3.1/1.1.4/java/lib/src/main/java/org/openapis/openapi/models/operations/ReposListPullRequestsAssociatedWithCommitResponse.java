/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class ReposListPullRequestsAssociatedWithCommitResponse {
    
    public String contentType;

    public ReposListPullRequestsAssociatedWithCommitResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public java.util.Map<String, String[]> headers;

    public ReposListPullRequestsAssociatedWithCommitResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    
    
    public Integer statusCode;

    public ReposListPullRequestsAssociatedWithCommitResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public ReposListPullRequestsAssociatedWithCommitResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Response
     */
    
    public org.openapis.openapi.models.shared.PullRequestSimple[] pullRequestSimples;

    public ReposListPullRequestsAssociatedWithCommitResponse withPullRequestSimples(org.openapis.openapi.models.shared.PullRequestSimple[] pullRequestSimples) {
        this.pullRequestSimples = pullRequestSimples;
        return this;
    }
    
    public ReposListPullRequestsAssociatedWithCommitResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
