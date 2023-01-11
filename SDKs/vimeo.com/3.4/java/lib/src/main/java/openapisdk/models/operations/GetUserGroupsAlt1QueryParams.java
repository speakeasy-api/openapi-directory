package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserGroupsAlt1QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public GetUserGroupsAlt1DirectionEnum direction;
    public GetUserGroupsAlt1QueryParams withDirection(GetUserGroupsAlt1DirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public GetUserGroupsAlt1FilterEnum filter;
    public GetUserGroupsAlt1QueryParams withFilter(GetUserGroupsAlt1FilterEnum filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public GetUserGroupsAlt1QueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Double perPage;
    public GetUserGroupsAlt1QueryParams withPerPage(Double perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public GetUserGroupsAlt1QueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetUserGroupsAlt1SortEnum sort;
    public GetUserGroupsAlt1QueryParams withSort(GetUserGroupsAlt1SortEnum sort) {
        this.sort = sort;
        return this;
    }
}