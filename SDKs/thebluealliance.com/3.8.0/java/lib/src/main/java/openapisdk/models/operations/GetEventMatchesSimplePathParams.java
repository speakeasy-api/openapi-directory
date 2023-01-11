package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEventMatchesSimplePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=event_key")
    public String eventKey;
    public GetEventMatchesSimplePathParams withEventKey(String eventKey) {
        this.eventKey = eventKey;
        return this;
    }
}