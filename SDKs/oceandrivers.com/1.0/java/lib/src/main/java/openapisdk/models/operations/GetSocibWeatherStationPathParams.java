package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSocibWeatherStationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=period")
    public String period;
    public GetSocibWeatherStationPathParams withPeriod(String period) {
        this.period = period;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=stationName")
    public String stationName;
    public GetSocibWeatherStationPathParams withStationName(String stationName) {
        this.stationName = stationName;
        return this;
    }
}