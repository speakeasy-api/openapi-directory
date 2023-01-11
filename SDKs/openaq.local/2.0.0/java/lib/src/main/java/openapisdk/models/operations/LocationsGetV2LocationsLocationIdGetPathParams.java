package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LocationsGetV2LocationsLocationIdGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=location_id")
    public Long locationId;
    public LocationsGetV2LocationsLocationIdGetPathParams withLocationId(Long locationId) {
        this.locationId = locationId;
        return this;
    }
}