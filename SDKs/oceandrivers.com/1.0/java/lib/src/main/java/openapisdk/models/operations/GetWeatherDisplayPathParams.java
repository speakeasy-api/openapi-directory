package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWeatherDisplayPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=stationName")
    public String stationName;
    public GetWeatherDisplayPathParams withStationName(String stationName) {
        this.stationName = stationName;
        return this;
    }
}