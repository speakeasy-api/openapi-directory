/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import java.net.http.HttpResponse;

public class CreateInviteResponse {
    
    public String contentType;
    public CreateInviteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;
    public CreateInviteResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;
    public CreateInviteResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Created
     */
    
    public org.openapis.openapi.models.shared.ChatV2ServiceChannelInvite chatV2ServiceChannelInvite;
    public CreateInviteResponse withChatV2ServiceChannelInvite(org.openapis.openapi.models.shared.ChatV2ServiceChannelInvite chatV2ServiceChannelInvite) {
        this.chatV2ServiceChannelInvite = chatV2ServiceChannelInvite;
        return this;
    }
    
}
