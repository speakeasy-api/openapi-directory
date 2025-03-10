/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class GetStatusResponse {
    /**
     * Successful response
     */
    
    public org.openapis.openapi.models.shared.APIStatus apiStatus;

    public GetStatusResponse withAPIStatus(org.openapis.openapi.models.shared.APIStatus apiStatus) {
        this.apiStatus = apiStatus;
        return this;
    }
    
    
    public String contentType;

    public GetStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public java.util.Map<String, String[]> headers;

    public GetStatusResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    
    
    public Integer statusCode;

    public GetStatusResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public GetStatusResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public GetStatusResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
