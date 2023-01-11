package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEventRankingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=event_key")
    public String eventKey;
    public GetEventRankingsPathParams withEventKey(String eventKey) {
        this.eventKey = eventKey;
        return this;
    }
}