package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetForecastTimeSeriesWrfPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=latitude")
    public Float latitude;
    public GetForecastTimeSeriesWrfPathParams withLatitude(Float latitude) {
        this.latitude = latitude;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=longitude")
    public Float longitude;
    public GetForecastTimeSeriesWrfPathParams withLongitude(Float longitude) {
        this.longitude = longitude;
        return this;
    }
}