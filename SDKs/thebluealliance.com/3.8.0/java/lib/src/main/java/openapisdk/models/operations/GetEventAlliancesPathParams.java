package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEventAlliancesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=event_key")
    public String eventKey;
    public GetEventAlliancesPathParams withEventKey(String eventKey) {
        this.eventKey = eventKey;
        return this;
    }
}