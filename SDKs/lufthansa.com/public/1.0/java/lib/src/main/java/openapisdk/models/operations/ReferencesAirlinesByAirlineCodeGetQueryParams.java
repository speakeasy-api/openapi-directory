package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReferencesAirlinesByAirlineCodeGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public String limit;
    public ReferencesAirlinesByAirlineCodeGetQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public String offset;
    public ReferencesAirlinesByAirlineCodeGetQueryParams withOffset(String offset) {
        this.offset = offset;
        return this;
    }
}