/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class EnterpriseAdminCreatePreReceiveHookResponse {
    
    public String contentType;

    public EnterpriseAdminCreatePreReceiveHookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public EnterpriseAdminCreatePreReceiveHookResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public EnterpriseAdminCreatePreReceiveHookResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Response
     */
    
    public org.openapis.openapi.models.shared.PreReceiveHook preReceiveHook;

    public EnterpriseAdminCreatePreReceiveHookResponse withPreReceiveHook(org.openapis.openapi.models.shared.PreReceiveHook preReceiveHook) {
        this.preReceiveHook = preReceiveHook;
        return this;
    }
    
    public EnterpriseAdminCreatePreReceiveHookResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
