/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class BloggerCommentsListResponse {
    /**
     * Successful response
     */
    
    public org.openapis.openapi.models.shared.CommentList commentList;

    public BloggerCommentsListResponse withCommentList(org.openapis.openapi.models.shared.CommentList commentList) {
        this.commentList = commentList;
        return this;
    }
    
    
    public String contentType;

    public BloggerCommentsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public BloggerCommentsListResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public BloggerCommentsListResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public BloggerCommentsListResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
