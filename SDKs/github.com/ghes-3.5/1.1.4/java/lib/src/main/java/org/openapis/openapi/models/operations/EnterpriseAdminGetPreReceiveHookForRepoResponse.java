/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class EnterpriseAdminGetPreReceiveHookForRepoResponse {
    
    public String contentType;

    public EnterpriseAdminGetPreReceiveHookForRepoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public EnterpriseAdminGetPreReceiveHookForRepoResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public EnterpriseAdminGetPreReceiveHookForRepoResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Response
     */
    
    public org.openapis.openapi.models.shared.RepositoryPreReceiveHook repositoryPreReceiveHook;

    public EnterpriseAdminGetPreReceiveHookForRepoResponse withRepositoryPreReceiveHook(org.openapis.openapi.models.shared.RepositoryPreReceiveHook repositoryPreReceiveHook) {
        this.repositoryPreReceiveHook = repositoryPreReceiveHook;
        return this;
    }
    
    public EnterpriseAdminGetPreReceiveHookForRepoResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
