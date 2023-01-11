package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateEventPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=conversation_id")
    public String conversationId;
    public CreateEventPathParams withConversationId(String conversationId) {
        this.conversationId = conversationId;
        return this;
    }
}