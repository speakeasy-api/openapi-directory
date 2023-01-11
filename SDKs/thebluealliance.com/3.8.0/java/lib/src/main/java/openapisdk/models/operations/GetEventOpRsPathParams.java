package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEventOpRsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=event_key")
    public String eventKey;
    public GetEventOpRsPathParams withEventKey(String eventKey) {
        this.eventKey = eventKey;
        return this;
    }
}