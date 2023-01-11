package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=airportCode")
    public String airportCode;
    public OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetPathParams withAirportCode(String airportCode) {
        this.airportCode = airportCode;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fromDateTime")
    public String fromDateTime;
    public OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetPathParams withFromDateTime(String fromDateTime) {
        this.fromDateTime = fromDateTime;
        return this;
    }
}