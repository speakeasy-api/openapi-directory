package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept")
    public String accept;
    public OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetHeaders withAccept(String accept) {
        this.accept = accept;
        return this;
    }
}