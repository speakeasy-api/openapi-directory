package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserGroupsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public GetUserGroupsDirectionEnum direction;
    public GetUserGroupsQueryParams withDirection(GetUserGroupsDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public GetUserGroupsFilterEnum filter;
    public GetUserGroupsQueryParams withFilter(GetUserGroupsFilterEnum filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public GetUserGroupsQueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Double perPage;
    public GetUserGroupsQueryParams withPerPage(Double perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public GetUserGroupsQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetUserGroupsSortEnum sort;
    public GetUserGroupsQueryParams withSort(GetUserGroupsSortEnum sort) {
        this.sort = sort;
        return this;
    }
}