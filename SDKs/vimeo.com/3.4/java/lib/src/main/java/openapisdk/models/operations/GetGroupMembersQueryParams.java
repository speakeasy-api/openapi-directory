package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGroupMembersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public GetGroupMembersDirectionEnum direction;
    public GetGroupMembersQueryParams withDirection(GetGroupMembersDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public GetGroupMembersFilterEnum filter;
    public GetGroupMembersQueryParams withFilter(GetGroupMembersFilterEnum filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public GetGroupMembersQueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Double perPage;
    public GetGroupMembersQueryParams withPerPage(Double perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public GetGroupMembersQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetGroupMembersSortEnum sort;
    public GetGroupMembersQueryParams withSort(GetGroupMembersSortEnum sort) {
        this.sort = sort;
        return this;
    }
}