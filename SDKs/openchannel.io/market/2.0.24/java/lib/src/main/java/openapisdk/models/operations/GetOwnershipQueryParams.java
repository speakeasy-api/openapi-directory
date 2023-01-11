package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOwnershipQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetOwnershipQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageNumber")
    public Long pageNumber;
    public GetOwnershipQueryParams withPageNumber(Long pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public GetOwnershipQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetOwnershipQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
}