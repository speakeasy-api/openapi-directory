/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class MybusinessaccountmanagementLocationsAdminsPatchResponse {
    /**
     * Successful response
     */
    
    public org.openapis.openapi.models.shared.Admin admin;

    public MybusinessaccountmanagementLocationsAdminsPatchResponse withAdmin(org.openapis.openapi.models.shared.Admin admin) {
        this.admin = admin;
        return this;
    }
    
    
    public String contentType;

    public MybusinessaccountmanagementLocationsAdminsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public MybusinessaccountmanagementLocationsAdminsPatchResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public MybusinessaccountmanagementLocationsAdminsPatchResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public MybusinessaccountmanagementLocationsAdminsPatchResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
