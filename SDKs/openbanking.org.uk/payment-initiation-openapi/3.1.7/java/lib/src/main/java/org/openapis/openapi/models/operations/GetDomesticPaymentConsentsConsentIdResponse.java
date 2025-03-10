/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class GetDomesticPaymentConsentsConsentIdResponse {
    
    public byte[] body;

    public GetDomesticPaymentConsentsConsentIdResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    
    
    public String contentType;

    public GetDomesticPaymentConsentsConsentIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public java.util.Map<String, String[]> headers;

    public GetDomesticPaymentConsentsConsentIdResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    
    /**
     * Bad request
     */
    
    public org.openapis.openapi.models.shared.OBErrorResponse1 obErrorResponse1;

    public GetDomesticPaymentConsentsConsentIdResponse withOBErrorResponse1(org.openapis.openapi.models.shared.OBErrorResponse1 obErrorResponse1) {
        this.obErrorResponse1 = obErrorResponse1;
        return this;
    }
    
    /**
     * Domestic Payment Consents Read
     */
    
    public org.openapis.openapi.models.shared.OBWriteDomesticConsentResponse5 obWriteDomesticConsentResponse5;

    public GetDomesticPaymentConsentsConsentIdResponse withOBWriteDomesticConsentResponse5(org.openapis.openapi.models.shared.OBWriteDomesticConsentResponse5 obWriteDomesticConsentResponse5) {
        this.obWriteDomesticConsentResponse5 = obWriteDomesticConsentResponse5;
        return this;
    }
    
    
    public Integer statusCode;

    public GetDomesticPaymentConsentsConsentIdResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public GetDomesticPaymentConsentsConsentIdResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public GetDomesticPaymentConsentsConsentIdResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
