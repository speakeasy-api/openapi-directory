package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEventSimplePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=event_key")
    public String eventKey;
    public GetEventSimplePathParams withEventKey(String eventKey) {
        this.eventKey = eventKey;
        return this;
    }
}