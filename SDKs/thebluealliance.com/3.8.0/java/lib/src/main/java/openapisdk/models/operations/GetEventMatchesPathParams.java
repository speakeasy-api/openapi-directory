package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEventMatchesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=event_key")
    public String eventKey;
    public GetEventMatchesPathParams withEventKey(String eventKey) {
        this.eventKey = eventKey;
        return this;
    }
}