package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchServiceConfigurationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ChatServiceSid")
    public String chatServiceSid;
    public FetchServiceConfigurationPathParams withChatServiceSid(String chatServiceSid) {
        this.chatServiceSid = chatServiceSid;
        return this;
    }
}