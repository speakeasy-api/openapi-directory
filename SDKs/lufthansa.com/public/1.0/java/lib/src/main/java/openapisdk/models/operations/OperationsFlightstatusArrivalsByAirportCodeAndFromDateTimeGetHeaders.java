package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept")
    public String accept;
    public OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetHeaders withAccept(String accept) {
        this.accept = accept;
        return this;
    }
}