package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserFollowingQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public GetUserFollowingDirectionEnum direction;
    public GetUserFollowingQueryParams withDirection(GetUserFollowingDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public GetUserFollowingFilterEnum filter;
    public GetUserFollowingQueryParams withFilter(GetUserFollowingFilterEnum filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public GetUserFollowingQueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Double perPage;
    public GetUserFollowingQueryParams withPerPage(Double perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public GetUserFollowingQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetUserFollowingSortEnum sort;
    public GetUserFollowingQueryParams withSort(GetUserFollowingSortEnum sort) {
        this.sort = sort;
        return this;
    }
}