package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateConversationMessagePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ConversationSid")
    public String conversationSid;
    public CreateConversationMessagePathParams withConversationSid(String conversationSid) {
        this.conversationSid = conversationSid;
        return this;
    }
}