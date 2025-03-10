/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class PaymentInitiationRecipientCreateResponse {
    
    public String contentType;

    public PaymentInitiationRecipientCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * OK
     */
    
    public java.util.Map<String, Object> paymentInitiationRecipientCreateResponse;

    public PaymentInitiationRecipientCreateResponse withPaymentInitiationRecipientCreateResponse(java.util.Map<String, Object> paymentInitiationRecipientCreateResponse) {
        this.paymentInitiationRecipientCreateResponse = paymentInitiationRecipientCreateResponse;
        return this;
    }
    
    
    public Integer statusCode;

    public PaymentInitiationRecipientCreateResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public PaymentInitiationRecipientCreateResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public PaymentInitiationRecipientCreateResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
