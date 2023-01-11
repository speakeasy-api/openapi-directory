package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEventPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=event_key")
    public String eventKey;
    public GetEventPathParams withEventKey(String eventKey) {
        this.eventKey = eventKey;
        return this;
    }
}