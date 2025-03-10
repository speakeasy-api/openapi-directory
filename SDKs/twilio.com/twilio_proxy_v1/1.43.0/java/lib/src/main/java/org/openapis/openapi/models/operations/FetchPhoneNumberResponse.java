/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class FetchPhoneNumberResponse {
    
    public String contentType;

    public FetchPhoneNumberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public FetchPhoneNumberResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public FetchPhoneNumberResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * OK
     */
    
    public org.openapis.openapi.models.shared.ProxyV1ServicePhoneNumber proxyV1ServicePhoneNumber;

    public FetchPhoneNumberResponse withProxyV1ServicePhoneNumber(org.openapis.openapi.models.shared.ProxyV1ServicePhoneNumber proxyV1ServicePhoneNumber) {
        this.proxyV1ServicePhoneNumber = proxyV1ServicePhoneNumber;
        return this;
    }
    
    public FetchPhoneNumberResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
