package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LatestGetV2LatestLocationIdGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=location_id")
    public Long locationId;
    public LatestGetV2LatestLocationIdGetPathParams withLocationId(Long locationId) {
        this.locationId = locationId;
        return this;
    }
}