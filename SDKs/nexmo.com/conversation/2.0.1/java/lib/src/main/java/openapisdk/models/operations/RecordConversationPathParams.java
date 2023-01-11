package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecordConversationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=conversation_id")
    public String conversationId;
    public RecordConversationPathParams withConversationId(String conversationId) {
        this.conversationId = conversationId;
        return this;
    }
}