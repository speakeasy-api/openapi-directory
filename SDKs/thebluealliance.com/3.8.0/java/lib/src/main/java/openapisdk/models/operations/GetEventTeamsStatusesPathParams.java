package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEventTeamsStatusesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=event_key")
    public String eventKey;
    public GetEventTeamsStatusesPathParams withEventKey(String eventKey) {
        this.eventKey = eventKey;
        return this;
    }
}