package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReferencesAirportsNearestByLatitudeAndLongitudeGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=latitude")
    public Integer latitude;
    public ReferencesAirportsNearestByLatitudeAndLongitudeGetPathParams withLatitude(Integer latitude) {
        this.latitude = latitude;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=longitude")
    public Integer longitude;
    public ReferencesAirportsNearestByLatitudeAndLongitudeGetPathParams withLongitude(Integer longitude) {
        this.longitude = longitude;
        return this;
    }
}