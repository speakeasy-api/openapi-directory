/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class TeamsListReposLegacyResponse {
    
    public String contentType;

    public TeamsListReposLegacyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public java.util.Map<String, String[]> headers;

    public TeamsListReposLegacyResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    
    
    public Integer statusCode;

    public TeamsListReposLegacyResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public TeamsListReposLegacyResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Resource not found
     */
    
    public org.openapis.openapi.models.shared.BasicError basicError;

    public TeamsListReposLegacyResponse withBasicError(org.openapis.openapi.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    
    /**
     * Response
     */
    
    public org.openapis.openapi.models.shared.MinimalRepository[] minimalRepositories;

    public TeamsListReposLegacyResponse withMinimalRepositories(org.openapis.openapi.models.shared.MinimalRepository[] minimalRepositories) {
        this.minimalRepositories = minimalRepositories;
        return this;
    }
    
    public TeamsListReposLegacyResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
