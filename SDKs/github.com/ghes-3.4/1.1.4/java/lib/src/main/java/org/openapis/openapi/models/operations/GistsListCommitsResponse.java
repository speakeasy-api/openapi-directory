/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class GistsListCommitsResponse {
    
    public String contentType;

    public GistsListCommitsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public java.util.Map<String, String[]> headers;

    public GistsListCommitsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    
    
    public Integer statusCode;

    public GistsListCommitsResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public GistsListCommitsResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Forbidden
     */
    
    public org.openapis.openapi.models.shared.BasicError basicError;

    public GistsListCommitsResponse withBasicError(org.openapis.openapi.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    
    /**
     * Response
     */
    
    public org.openapis.openapi.models.shared.GistCommit[] gistCommits;

    public GistsListCommitsResponse withGistCommits(org.openapis.openapi.models.shared.GistCommit[] gistCommits) {
        this.gistCommits = gistCommits;
        return this;
    }
    
    public GistsListCommitsResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
