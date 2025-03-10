/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import java.net.http.HttpResponse;

public class UpdateMemberResponse {
    
    public String contentType;
    public UpdateMemberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;
    public UpdateMemberResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;
    public UpdateMemberResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * OK
     */
    
    public org.openapis.openapi.models.shared.ChatV1ServiceChannelMember chatV1ServiceChannelMember;
    public UpdateMemberResponse withChatV1ServiceChannelMember(org.openapis.openapi.models.shared.ChatV1ServiceChannelMember chatV1ServiceChannelMember) {
        this.chatV1ServiceChannelMember = chatV1ServiceChannelMember;
        return this;
    }
    
}
