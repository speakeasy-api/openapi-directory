package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChannelSubscriptionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public GetChannelSubscriptionsDirectionEnum direction;
    public GetChannelSubscriptionsQueryParams withDirection(GetChannelSubscriptionsDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public GetChannelSubscriptionsFilterEnum filter;
    public GetChannelSubscriptionsQueryParams withFilter(GetChannelSubscriptionsFilterEnum filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public GetChannelSubscriptionsQueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Double perPage;
    public GetChannelSubscriptionsQueryParams withPerPage(Double perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public GetChannelSubscriptionsQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetChannelSubscriptionsSortEnum sort;
    public GetChannelSubscriptionsQueryParams withSort(GetChannelSubscriptionsSortEnum sort) {
        this.sort = sort;
        return this;
    }
}