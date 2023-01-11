package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEventTeamsKeysPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=event_key")
    public String eventKey;
    public GetEventTeamsKeysPathParams withEventKey(String eventKey) {
        this.eventKey = eventKey;
        return this;
    }
}