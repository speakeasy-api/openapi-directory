package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEventPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=conversation_id")
    public String conversationId;
    public GetEventPathParams withConversationId(String conversationId) {
        this.conversationId = conversationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=event_id")
    public String eventId;
    public GetEventPathParams withEventId(String eventId) {
        this.eventId = eventId;
        return this;
    }
}