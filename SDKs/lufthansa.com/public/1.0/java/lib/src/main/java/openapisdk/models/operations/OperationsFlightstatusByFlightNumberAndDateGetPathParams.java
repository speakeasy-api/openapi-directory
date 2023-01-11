package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OperationsFlightstatusByFlightNumberAndDateGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=date")
    public String date;
    public OperationsFlightstatusByFlightNumberAndDateGetPathParams withDate(String date) {
        this.date = date;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=flightNumber")
    public String flightNumber;
    public OperationsFlightstatusByFlightNumberAndDateGetPathParams withFlightNumber(String flightNumber) {
        this.flightNumber = flightNumber;
        return this;
    }
}