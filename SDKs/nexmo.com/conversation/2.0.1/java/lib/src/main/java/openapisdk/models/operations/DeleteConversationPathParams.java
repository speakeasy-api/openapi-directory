package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteConversationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=conversation_id")
    public String conversationId;
    public DeleteConversationPathParams withConversationId(String conversationId) {
        this.conversationId = conversationId;
        return this;
    }
}