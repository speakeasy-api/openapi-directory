package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAemetStationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=period")
    public String period;
    public GetAemetStationPathParams withPeriod(String period) {
        this.period = period;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=stationName")
    public String stationName;
    public GetAemetStationPathParams withStationName(String stationName) {
        this.stationName = stationName;
        return this;
    }
}