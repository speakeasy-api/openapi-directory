package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LatestV1GetV1LatestLocationIdGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=location_id")
    public Long locationId;
    public LatestV1GetV1LatestLocationIdGetPathParams withLocationId(Long locationId) {
        this.locationId = locationId;
        return this;
    }
}