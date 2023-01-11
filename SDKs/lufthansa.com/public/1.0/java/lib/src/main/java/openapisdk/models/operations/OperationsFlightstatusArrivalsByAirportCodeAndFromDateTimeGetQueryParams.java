package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public String limit;
    public OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public String offset;
    public OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetQueryParams withOffset(String offset) {
        this.offset = offset;
        return this;
    }
}