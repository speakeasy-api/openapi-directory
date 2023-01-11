package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReferencesAirlinesByAirlineCodeGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=airlineCode")
    public String airlineCode;
    public ReferencesAirlinesByAirlineCodeGetPathParams withAirlineCode(String airlineCode) {
        this.airlineCode = airlineCode;
        return this;
    }
}