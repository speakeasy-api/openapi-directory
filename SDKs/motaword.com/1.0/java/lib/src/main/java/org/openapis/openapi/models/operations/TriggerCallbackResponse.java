/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class TriggerCallbackResponse {
    /**
     * Callback result
     */
    
    public org.openapis.openapi.models.shared.CallbackResult callbackResult;

    public TriggerCallbackResponse withCallbackResult(org.openapis.openapi.models.shared.CallbackResult callbackResult) {
        this.callbackResult = callbackResult;
        return this;
    }
    
    
    public String contentType;

    public TriggerCallbackResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * ProjectNotFound
     */
    
    public org.openapis.openapi.models.shared.Error error;

    public TriggerCallbackResponse withError(org.openapis.openapi.models.shared.Error error) {
        this.error = error;
        return this;
    }
    
    
    public Integer statusCode;

    public TriggerCallbackResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public TriggerCallbackResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public TriggerCallbackResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
