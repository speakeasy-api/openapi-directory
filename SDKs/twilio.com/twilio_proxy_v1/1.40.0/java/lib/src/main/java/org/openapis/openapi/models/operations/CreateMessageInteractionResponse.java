/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import java.net.http.HttpResponse;

public class CreateMessageInteractionResponse {
    
    public String contentType;
    public CreateMessageInteractionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;
    public CreateMessageInteractionResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;
    public CreateMessageInteractionResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Created
     */
    
    public org.openapis.openapi.models.shared.ProxyV1ServiceSessionParticipantMessageInteraction proxyV1ServiceSessionParticipantMessageInteraction;
    public CreateMessageInteractionResponse withProxyV1ServiceSessionParticipantMessageInteraction(org.openapis.openapi.models.shared.ProxyV1ServiceSessionParticipantMessageInteraction proxyV1ServiceSessionParticipantMessageInteraction) {
        this.proxyV1ServiceSessionParticipantMessageInteraction = proxyV1ServiceSessionParticipantMessageInteraction;
        return this;
    }
    
}
