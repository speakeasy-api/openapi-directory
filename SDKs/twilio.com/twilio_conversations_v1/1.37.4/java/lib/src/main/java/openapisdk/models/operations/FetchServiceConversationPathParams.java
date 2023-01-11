package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchServiceConversationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ChatServiceSid")
    public String chatServiceSid;
    public FetchServiceConversationPathParams withChatServiceSid(String chatServiceSid) {
        this.chatServiceSid = chatServiceSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchServiceConversationPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}