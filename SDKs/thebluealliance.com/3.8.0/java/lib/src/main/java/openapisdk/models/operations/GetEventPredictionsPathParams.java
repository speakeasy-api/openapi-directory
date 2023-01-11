package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEventPredictionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=event_key")
    public String eventKey;
    public GetEventPredictionsPathParams withEventKey(String eventKey) {
        this.eventKey = eventKey;
        return this;
    }
}