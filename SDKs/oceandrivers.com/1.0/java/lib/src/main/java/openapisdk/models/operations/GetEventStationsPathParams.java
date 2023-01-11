package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEventStationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=eventId")
    public String eventId;
    public GetEventStationsPathParams withEventId(String eventId) {
        this.eventId = eventId;
        return this;
    }
}