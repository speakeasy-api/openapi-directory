/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class CreateSipCredentialResponse {
    
    public String contentType;

    public CreateSipCredentialResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public CreateSipCredentialResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public CreateSipCredentialResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Created
     */
    
    public org.openapis.openapi.models.shared.ApiV2010AccountSipSipCredentialListSipCredential apiV2010AccountSipSipCredentialListSipCredential;

    public CreateSipCredentialResponse withApiV2010AccountSipSipCredentialListSipCredential(org.openapis.openapi.models.shared.ApiV2010AccountSipSipCredentialListSipCredential apiV2010AccountSipSipCredentialListSipCredential) {
        this.apiV2010AccountSipSipCredentialListSipCredential = apiV2010AccountSipSipCredentialListSipCredential;
        return this;
    }
    
    public CreateSipCredentialResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
