package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=airportCode")
    public String airportCode;
    public OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetPathParams withAirportCode(String airportCode) {
        this.airportCode = airportCode;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fromDateTime")
    public String fromDateTime;
    public OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetPathParams withFromDateTime(String fromDateTime) {
        this.fromDateTime = fromDateTime;
        return this;
    }
}