package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateMemberPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=conversation_id")
    public String conversationId;
    public CreateMemberPathParams withConversationId(String conversationId) {
        this.conversationId = conversationId;
        return this;
    }
}