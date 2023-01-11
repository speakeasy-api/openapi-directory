package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUsersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=length")
    public Long length;
    public GetUsersQueryParams withLength(Long length) {
        this.length = length;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ordering")
    public String ordering;
    public GetUsersQueryParams withOrdering(String ordering) {
        this.ordering = ordering;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetUsersQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search")
    public String search;
    public GetUsersQueryParams withSearch(String search) {
        this.search = search;
        return this;
    }
}