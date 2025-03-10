/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class StoryIdSessionPostResponse {
    
    public String contentType;

    public StoryIdSessionPostResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public StoryIdSessionPostResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public StoryIdSessionPostResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Unauthorized
     */
    
    public org.openapis.openapi.models.shared.ProblemDetail problemDetail;

    public StoryIdSessionPostResponse withProblemDetail(org.openapis.openapi.models.shared.ProblemDetail problemDetail) {
        this.problemDetail = problemDetail;
        return this;
    }
    
    /**
     * A new session object
     */
    
    public org.openapis.openapi.models.shared.Session session;

    public StoryIdSessionPostResponse withSession(org.openapis.openapi.models.shared.Session session) {
        this.session = session;
        return this;
    }
    
    public StoryIdSessionPostResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
