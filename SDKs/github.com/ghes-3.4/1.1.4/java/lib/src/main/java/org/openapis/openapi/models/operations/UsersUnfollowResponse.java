/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class UsersUnfollowResponse {
    
    public String contentType;

    public UsersUnfollowResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public UsersUnfollowResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public UsersUnfollowResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Requires authentication
     */
    
    public org.openapis.openapi.models.shared.BasicError basicError;

    public UsersUnfollowResponse withBasicError(org.openapis.openapi.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    
    public UsersUnfollowResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
