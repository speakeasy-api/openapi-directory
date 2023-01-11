package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteEventPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=conversation_id")
    public String conversationId;
    public DeleteEventPathParams withConversationId(String conversationId) {
        this.conversationId = conversationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=event_id")
    public String eventId;
    public DeleteEventPathParams withEventId(String eventId) {
        this.eventId = eventId;
        return this;
    }
}