package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEventTeamsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=event_key")
    public String eventKey;
    public GetEventTeamsPathParams withEventKey(String eventKey) {
        this.eventKey = eventKey;
        return this;
    }
}