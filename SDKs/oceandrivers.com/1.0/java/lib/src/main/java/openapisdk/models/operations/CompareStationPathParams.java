package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CompareStationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=stationName")
    public String stationName;
    public CompareStationPathParams withStationName(String stationName) {
        this.stationName = stationName;
        return this;
    }
}