package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChannelSubscribersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public GetChannelSubscribersDirectionEnum direction;
    public GetChannelSubscribersQueryParams withDirection(GetChannelSubscribersDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public GetChannelSubscribersFilterEnum filter;
    public GetChannelSubscribersQueryParams withFilter(GetChannelSubscribersFilterEnum filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public GetChannelSubscribersQueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Double perPage;
    public GetChannelSubscribersQueryParams withPerPage(Double perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public GetChannelSubscribersQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetChannelSubscribersSortEnum sort;
    public GetChannelSubscribersQueryParams withSort(GetChannelSubscribersSortEnum sort) {
        this.sort = sort;
        return this;
    }
}