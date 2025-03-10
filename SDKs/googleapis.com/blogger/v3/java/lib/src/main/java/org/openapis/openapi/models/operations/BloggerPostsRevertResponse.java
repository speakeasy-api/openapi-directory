/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class BloggerPostsRevertResponse {
    
    public String contentType;

    public BloggerPostsRevertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Successful response
     */
    
    public org.openapis.openapi.models.shared.Post post;

    public BloggerPostsRevertResponse withPost(org.openapis.openapi.models.shared.Post post) {
        this.post = post;
        return this;
    }
    
    
    public Integer statusCode;

    public BloggerPostsRevertResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public BloggerPostsRevertResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public BloggerPostsRevertResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
