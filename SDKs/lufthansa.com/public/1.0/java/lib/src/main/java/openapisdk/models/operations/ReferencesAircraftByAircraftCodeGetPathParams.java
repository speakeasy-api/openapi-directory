package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReferencesAircraftByAircraftCodeGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=aircraftCode")
    public String aircraftCode;
    public ReferencesAircraftByAircraftCodeGetPathParams withAircraftCode(String aircraftCode) {
        this.aircraftCode = aircraftCode;
        return this;
    }
}