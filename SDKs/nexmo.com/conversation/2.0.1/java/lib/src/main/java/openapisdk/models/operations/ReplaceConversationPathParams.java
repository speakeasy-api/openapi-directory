package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReplaceConversationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=conversation_id")
    public String conversationId;
    public ReplaceConversationPathParams withConversationId(String conversationId) {
        this.conversationId = conversationId;
        return this;
    }
}