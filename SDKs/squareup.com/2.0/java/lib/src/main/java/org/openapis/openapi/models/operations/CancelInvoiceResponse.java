/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class CancelInvoiceResponse {
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.CancelInvoiceResponse cancelInvoiceResponse;

    public CancelInvoiceResponse withCancelInvoiceResponse(org.openapis.openapi.models.shared.CancelInvoiceResponse cancelInvoiceResponse) {
        this.cancelInvoiceResponse = cancelInvoiceResponse;
        return this;
    }
    
    
    public String contentType;

    public CancelInvoiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public CancelInvoiceResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public CancelInvoiceResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public CancelInvoiceResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
