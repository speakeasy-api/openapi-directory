/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class ExecuteActionResponse {
    
    public String contentType;

    public ExecuteActionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Error response
     */
    
    public org.openapis.openapi.models.shared.ErrorModel errorModel;

    public ExecuteActionResponse withErrorModel(org.openapis.openapi.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    
    
    public Integer statusCode;

    public ExecuteActionResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public ExecuteActionResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public ExecuteActionResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
