package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEventTeamsSimplePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=event_key")
    public String eventKey;
    public GetEventTeamsSimplePathParams withEventKey(String eventKey) {
        this.eventKey = eventKey;
        return this;
    }
}