package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEventDistrictPointsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=event_key")
    public String eventKey;
    public GetEventDistrictPointsPathParams withEventKey(String eventKey) {
        this.eventKey = eventKey;
        return this;
    }
}