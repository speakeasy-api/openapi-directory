package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEventMatchTimeseriesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=event_key")
    public String eventKey;
    public GetEventMatchTimeseriesPathParams withEventKey(String eventKey) {
        this.eventKey = eventKey;
        return this;
    }
}