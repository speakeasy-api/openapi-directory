package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OperationsFlightstatusRouteDateByOriginAndDestinationGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public String limit;
    public OperationsFlightstatusRouteDateByOriginAndDestinationGetQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public String offset;
    public OperationsFlightstatusRouteDateByOriginAndDestinationGetQueryParams withOffset(String offset) {
        this.offset = offset;
        return this;
    }
}