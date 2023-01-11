package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFollowersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public GetFollowersDirectionEnum direction;
    public GetFollowersQueryParams withDirection(GetFollowersDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public GetFollowersQueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Double perPage;
    public GetFollowersQueryParams withPerPage(Double perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public GetFollowersQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetFollowersSortEnum sort;
    public GetFollowersQueryParams withSort(GetFollowersSortEnum sort) {
        this.sort = sort;
        return this;
    }
}