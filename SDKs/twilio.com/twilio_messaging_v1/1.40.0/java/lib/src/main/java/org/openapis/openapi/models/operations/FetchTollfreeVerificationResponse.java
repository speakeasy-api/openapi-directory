/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import java.net.http.HttpResponse;

public class FetchTollfreeVerificationResponse {
    
    public String contentType;
    public FetchTollfreeVerificationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;
    public FetchTollfreeVerificationResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;
    public FetchTollfreeVerificationResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * OK
     */
    
    public org.openapis.openapi.models.shared.MessagingV1TollfreeVerification messagingV1TollfreeVerification;
    public FetchTollfreeVerificationResponse withMessagingV1TollfreeVerification(org.openapis.openapi.models.shared.MessagingV1TollfreeVerification messagingV1TollfreeVerification) {
        this.messagingV1TollfreeVerification = messagingV1TollfreeVerification;
        return this;
    }
    
}
