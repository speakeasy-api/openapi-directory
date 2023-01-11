package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFollowersAlt1QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public GetFollowersAlt1DirectionEnum direction;
    public GetFollowersAlt1QueryParams withDirection(GetFollowersAlt1DirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public GetFollowersAlt1QueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Double perPage;
    public GetFollowersAlt1QueryParams withPerPage(Double perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public GetFollowersAlt1QueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetFollowersAlt1SortEnum sort;
    public GetFollowersAlt1QueryParams withSort(GetFollowersAlt1SortEnum sort) {
        this.sort = sort;
        return this;
    }
}