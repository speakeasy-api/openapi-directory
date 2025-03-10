/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class EnterpriseAdminGetPreReceiveEnvironmentResponse {
    
    public String contentType;

    public EnterpriseAdminGetPreReceiveEnvironmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public EnterpriseAdminGetPreReceiveEnvironmentResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public EnterpriseAdminGetPreReceiveEnvironmentResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Response
     */
    
    public org.openapis.openapi.models.shared.PreReceiveEnvironment preReceiveEnvironment;

    public EnterpriseAdminGetPreReceiveEnvironmentResponse withPreReceiveEnvironment(org.openapis.openapi.models.shared.PreReceiveEnvironment preReceiveEnvironment) {
        this.preReceiveEnvironment = preReceiveEnvironment;
        return this;
    }
    
    public EnterpriseAdminGetPreReceiveEnvironmentResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
