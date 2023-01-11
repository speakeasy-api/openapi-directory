package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OperationsSchedulesFromDateTimeByOriginAndDestinationGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=directFlights")
    public Boolean directFlights;
    public OperationsSchedulesFromDateTimeByOriginAndDestinationGetQueryParams withDirectFlights(Boolean directFlights) {
        this.directFlights = directFlights;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public String limit;
    public OperationsSchedulesFromDateTimeByOriginAndDestinationGetQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public String offset;
    public OperationsSchedulesFromDateTimeByOriginAndDestinationGetQueryParams withOffset(String offset) {
        this.offset = offset;
        return this;
    }
}