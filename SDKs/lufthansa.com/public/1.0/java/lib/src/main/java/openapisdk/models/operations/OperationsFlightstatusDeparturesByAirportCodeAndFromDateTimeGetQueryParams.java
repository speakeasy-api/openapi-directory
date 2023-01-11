package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public String limit;
    public OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public String offset;
    public OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetQueryParams withOffset(String offset) {
        this.offset = offset;
        return this;
    }
}