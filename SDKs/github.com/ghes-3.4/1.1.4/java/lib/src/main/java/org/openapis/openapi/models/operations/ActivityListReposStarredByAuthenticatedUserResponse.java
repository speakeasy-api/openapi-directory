/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class ActivityListReposStarredByAuthenticatedUserResponse {
    
    public String contentType;

    public ActivityListReposStarredByAuthenticatedUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public java.util.Map<String, String[]> headers;

    public ActivityListReposStarredByAuthenticatedUserResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    
    
    public Integer statusCode;

    public ActivityListReposStarredByAuthenticatedUserResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public ActivityListReposStarredByAuthenticatedUserResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Requires authentication
     */
    
    public org.openapis.openapi.models.shared.BasicError basicError;

    public ActivityListReposStarredByAuthenticatedUserResponse withBasicError(org.openapis.openapi.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    
    /**
     * Response
     */
    
    public org.openapis.openapi.models.shared.Repository[] repositories;

    public ActivityListReposStarredByAuthenticatedUserResponse withRepositories(org.openapis.openapi.models.shared.Repository[] repositories) {
        this.repositories = repositories;
        return this;
    }
    
    /**
     * Response
     */
    
    public org.openapis.openapi.models.shared.StarredRepository[] starredRepositories;

    public ActivityListReposStarredByAuthenticatedUserResponse withStarredRepositories(org.openapis.openapi.models.shared.StarredRepository[] starredRepositories) {
        this.starredRepositories = starredRepositories;
        return this;
    }
    
    public ActivityListReposStarredByAuthenticatedUserResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
