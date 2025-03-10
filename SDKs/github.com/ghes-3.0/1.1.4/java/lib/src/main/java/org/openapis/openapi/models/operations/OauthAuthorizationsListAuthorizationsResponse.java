/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class OauthAuthorizationsListAuthorizationsResponse {
    
    public String contentType;

    public OauthAuthorizationsListAuthorizationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public java.util.Map<String, String[]> headers;

    public OauthAuthorizationsListAuthorizationsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    
    
    public Integer statusCode;

    public OauthAuthorizationsListAuthorizationsResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public OauthAuthorizationsListAuthorizationsResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Response
     */
    
    public org.openapis.openapi.models.shared.Authorization[] authorizations;

    public OauthAuthorizationsListAuthorizationsResponse withAuthorizations(org.openapis.openapi.models.shared.Authorization[] authorizations) {
        this.authorizations = authorizations;
        return this;
    }
    
    /**
     * Requires authentication
     */
    
    public org.openapis.openapi.models.shared.BasicError basicError;

    public OauthAuthorizationsListAuthorizationsResponse withBasicError(org.openapis.openapi.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    
    public OauthAuthorizationsListAuthorizationsResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
