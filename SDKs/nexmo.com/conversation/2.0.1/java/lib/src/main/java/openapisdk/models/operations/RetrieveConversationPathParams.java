package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RetrieveConversationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=conversation_id")
    public String conversationId;
    public RetrieveConversationPathParams withConversationId(String conversationId) {
        this.conversationId = conversationId;
        return this;
    }
}