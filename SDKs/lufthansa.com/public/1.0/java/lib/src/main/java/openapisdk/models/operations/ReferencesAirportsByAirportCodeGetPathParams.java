package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReferencesAirportsByAirportCodeGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=airportCode")
    public String airportCode;
    public ReferencesAirportsByAirportCodeGetPathParams withAirportCode(String airportCode) {
        this.airportCode = airportCode;
        return this;
    }
}