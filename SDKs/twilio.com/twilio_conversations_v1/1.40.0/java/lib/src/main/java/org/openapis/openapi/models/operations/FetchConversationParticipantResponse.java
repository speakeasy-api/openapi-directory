/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import java.net.http.HttpResponse;

public class FetchConversationParticipantResponse {
    
    public String contentType;
    public FetchConversationParticipantResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;
    public FetchConversationParticipantResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;
    public FetchConversationParticipantResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * OK
     */
    
    public org.openapis.openapi.models.shared.ConversationsV1ConversationConversationParticipant conversationsV1ConversationConversationParticipant;
    public FetchConversationParticipantResponse withConversationsV1ConversationConversationParticipant(org.openapis.openapi.models.shared.ConversationsV1ConversationConversationParticipant conversationsV1ConversationConversationParticipant) {
        this.conversationsV1ConversationConversationParticipant = conversationsV1ConversationConversationParticipant;
        return this;
    }
    
}
