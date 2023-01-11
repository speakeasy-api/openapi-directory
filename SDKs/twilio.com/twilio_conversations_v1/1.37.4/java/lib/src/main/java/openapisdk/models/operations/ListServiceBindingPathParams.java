package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListServiceBindingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ChatServiceSid")
    public String chatServiceSid;
    public ListServiceBindingPathParams withChatServiceSid(String chatServiceSid) {
        this.chatServiceSid = chatServiceSid;
        return this;
    }
}