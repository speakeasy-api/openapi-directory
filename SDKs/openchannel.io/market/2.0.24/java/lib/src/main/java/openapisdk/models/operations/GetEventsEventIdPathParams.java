package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEventsEventIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=eventId")
    public String eventId;
    public GetEventsEventIdPathParams withEventId(String eventId) {
        this.eventId = eventId;
        return this;
    }
}