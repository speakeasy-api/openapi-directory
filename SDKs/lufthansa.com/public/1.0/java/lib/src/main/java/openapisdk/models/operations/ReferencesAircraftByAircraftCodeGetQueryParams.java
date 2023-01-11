package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReferencesAircraftByAircraftCodeGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public String limit;
    public ReferencesAircraftByAircraftCodeGetQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public String offset;
    public ReferencesAircraftByAircraftCodeGetQueryParams withOffset(String offset) {
        this.offset = offset;
        return this;
    }
}