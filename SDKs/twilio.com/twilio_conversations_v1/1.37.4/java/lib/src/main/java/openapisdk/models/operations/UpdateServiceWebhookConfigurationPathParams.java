package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateServiceWebhookConfigurationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ChatServiceSid")
    public String chatServiceSid;
    public UpdateServiceWebhookConfigurationPathParams withChatServiceSid(String chatServiceSid) {
        this.chatServiceSid = chatServiceSid;
        return this;
    }
}