/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class VerifyAadharOTPOnlyUsingPOST1Response {
    
    public byte[] body;

    public VerifyAadharOTPOnlyUsingPOST1Response withBody(byte[] body) {
        this.body = body;
        return this;
    }
    
    
    public String contentType;

    public VerifyAadharOTPOnlyUsingPOST1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public VerifyAadharOTPOnlyUsingPOST1Response withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public VerifyAadharOTPOnlyUsingPOST1Response withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public VerifyAadharOTPOnlyUsingPOST1Response(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
