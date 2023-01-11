package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListLicenseesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public ListLicenseesQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public ListLicenseesQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=starting_after")
    public Integer startingAfter;
    public ListLicenseesQueryParams withStartingAfter(Integer startingAfter) {
        this.startingAfter = startingAfter;
        return this;
    }
}