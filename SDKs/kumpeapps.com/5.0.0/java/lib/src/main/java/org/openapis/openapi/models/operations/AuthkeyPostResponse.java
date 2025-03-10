/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class AuthkeyPostResponse {
    /**
     * Access Denied
     */
    
    public org.openapis.openapi.models.shared.FourHundredAndThree fourHundredAndThree;

    public AuthkeyPostResponse withFourHundredAndThree(org.openapis.openapi.models.shared.FourHundredAndThree fourHundredAndThree) {
        this.fourHundredAndThree = fourHundredAndThree;
        return this;
    }
    
    /**
     * OTP required but not supplied. Please resubmit request with OTP
     */
    
    public org.openapis.openapi.models.shared.FourHundredAndFortyNine fourHundredAndFortyNine;

    public AuthkeyPostResponse withFourHundredAndFortyNine(org.openapis.openapi.models.shared.FourHundredAndFortyNine fourHundredAndFortyNine) {
        this.fourHundredAndFortyNine = fourHundredAndFortyNine;
        return this;
    }
    
    
    public String contentType;

    public AuthkeyPostResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public AuthkeyPostResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public AuthkeyPostResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * User Authenticated Sucessfully
     */
    
    public org.openapis.openapi.models.shared.InlineResponse2011 inlineResponse2011;

    public AuthkeyPostResponse withInlineResponse2011(org.openapis.openapi.models.shared.InlineResponse2011 inlineResponse2011) {
        this.inlineResponse2011 = inlineResponse2011;
        return this;
    }
    
    public AuthkeyPostResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
