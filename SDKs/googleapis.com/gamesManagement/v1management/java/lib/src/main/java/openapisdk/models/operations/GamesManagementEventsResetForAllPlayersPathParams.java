package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GamesManagementEventsResetForAllPlayersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=eventId")
    public String eventId;
    public GamesManagementEventsResetForAllPlayersPathParams withEventId(String eventId) {
        this.eventId = eventId;
        return this;
    }
}