package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEventInsightsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=event_key")
    public String eventKey;
    public GetEventInsightsPathParams withEventKey(String eventKey) {
        this.eventKey = eventKey;
        return this;
    }
}