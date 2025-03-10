/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class ReposGetTeamsWithAccessToProtectedBranchResponse {
    
    public String contentType;

    public ReposGetTeamsWithAccessToProtectedBranchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public ReposGetTeamsWithAccessToProtectedBranchResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public ReposGetTeamsWithAccessToProtectedBranchResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Resource not found
     */
    
    public org.openapis.openapi.models.shared.BasicError basicError;

    public ReposGetTeamsWithAccessToProtectedBranchResponse withBasicError(org.openapis.openapi.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    
    /**
     * Response
     */
    
    public org.openapis.openapi.models.shared.Team[] teams;

    public ReposGetTeamsWithAccessToProtectedBranchResponse withTeams(org.openapis.openapi.models.shared.Team[] teams) {
        this.teams = teams;
        return this;
    }
    
    public ReposGetTeamsWithAccessToProtectedBranchResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
