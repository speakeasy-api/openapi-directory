package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GamesManagementEventsResetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=eventId")
    public String eventId;
    public GamesManagementEventsResetPathParams withEventId(String eventId) {
        this.eventId = eventId;
        return this;
    }
}