package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopsStopsByGeolocationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=latitude")
    public Float latitude;
    public StopsStopsByGeolocationPathParams withLatitude(Float latitude) {
        this.latitude = latitude;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=longitude")
    public Float longitude;
    public StopsStopsByGeolocationPathParams withLongitude(Float longitude) {
        this.longitude = longitude;
        return this;
    }
}