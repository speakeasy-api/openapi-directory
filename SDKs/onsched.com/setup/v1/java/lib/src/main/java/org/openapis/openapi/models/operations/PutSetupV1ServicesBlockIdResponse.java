/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class PutSetupV1ServicesBlockIdResponse {
    
    public String contentType;

    public PutSetupV1ServicesBlockIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.ServiceBlockViewModel serviceBlockViewModel;

    public PutSetupV1ServicesBlockIdResponse withServiceBlockViewModel(org.openapis.openapi.models.shared.ServiceBlockViewModel serviceBlockViewModel) {
        this.serviceBlockViewModel = serviceBlockViewModel;
        return this;
    }
    
    
    public Integer statusCode;

    public PutSetupV1ServicesBlockIdResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public PutSetupV1ServicesBlockIdResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public PutSetupV1ServicesBlockIdResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
