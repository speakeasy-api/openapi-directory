package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEventAwardsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=event_key")
    public String eventKey;
    public GetEventAwardsPathParams withEventKey(String eventKey) {
        this.eventKey = eventKey;
        return this;
    }
}