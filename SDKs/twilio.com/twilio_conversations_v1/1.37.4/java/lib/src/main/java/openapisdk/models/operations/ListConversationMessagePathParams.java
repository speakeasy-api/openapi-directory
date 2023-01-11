package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListConversationMessagePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ConversationSid")
    public String conversationSid;
    public ListConversationMessagePathParams withConversationSid(String conversationSid) {
        this.conversationSid = conversationSid;
        return this;
    }
}