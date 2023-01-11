package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGpxQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=gps_accuracy")
    public Long gpsAccuracy;
    public PostGpxQueryParams withGpsAccuracy(Long gpsAccuracy) {
        this.gpsAccuracy = gpsAccuracy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vehicle")
    public String vehicle;
    public PostGpxQueryParams withVehicle(String vehicle) {
        this.vehicle = vehicle;
        return this;
    }
}