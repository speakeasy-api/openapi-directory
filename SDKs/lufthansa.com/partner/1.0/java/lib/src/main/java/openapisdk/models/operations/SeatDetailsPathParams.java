package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SeatDetailsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=aircraftCode")
    public String aircraftCode;
    public SeatDetailsPathParams withAircraftCode(String aircraftCode) {
        this.aircraftCode = aircraftCode;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=cabinCode")
    public String cabinCode;
    public SeatDetailsPathParams withCabinCode(String cabinCode) {
        this.cabinCode = cabinCode;
        return this;
    }
}