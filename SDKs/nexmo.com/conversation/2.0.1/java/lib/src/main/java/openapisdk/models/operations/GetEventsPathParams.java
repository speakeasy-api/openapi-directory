package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEventsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=conversation_id")
    public String conversationId;
    public GetEventsPathParams withConversationId(String conversationId) {
        this.conversationId = conversationId;
        return this;
    }
}