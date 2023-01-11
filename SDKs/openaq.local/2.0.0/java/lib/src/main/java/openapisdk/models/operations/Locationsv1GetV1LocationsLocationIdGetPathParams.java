package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class Locationsv1GetV1LocationsLocationIdGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=location_id")
    public Long locationId;
    public Locationsv1GetV1LocationsLocationIdGetPathParams withLocationId(Long locationId) {
        this.locationId = locationId;
        return this;
    }
}