/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class DfareportingAccountPermissionsGetResponse {
    /**
     * Successful response
     */
    
    public org.openapis.openapi.models.shared.AccountPermission accountPermission;

    public DfareportingAccountPermissionsGetResponse withAccountPermission(org.openapis.openapi.models.shared.AccountPermission accountPermission) {
        this.accountPermission = accountPermission;
        return this;
    }
    
    
    public String contentType;

    public DfareportingAccountPermissionsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public DfareportingAccountPermissionsGetResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public DfareportingAccountPermissionsGetResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public DfareportingAccountPermissionsGetResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
