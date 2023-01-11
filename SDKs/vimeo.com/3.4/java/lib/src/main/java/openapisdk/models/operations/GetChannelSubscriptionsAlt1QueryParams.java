package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChannelSubscriptionsAlt1QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public GetChannelSubscriptionsAlt1DirectionEnum direction;
    public GetChannelSubscriptionsAlt1QueryParams withDirection(GetChannelSubscriptionsAlt1DirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public GetChannelSubscriptionsAlt1FilterEnum filter;
    public GetChannelSubscriptionsAlt1QueryParams withFilter(GetChannelSubscriptionsAlt1FilterEnum filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public GetChannelSubscriptionsAlt1QueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Double perPage;
    public GetChannelSubscriptionsAlt1QueryParams withPerPage(Double perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public GetChannelSubscriptionsAlt1QueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetChannelSubscriptionsAlt1SortEnum sort;
    public GetChannelSubscriptionsAlt1QueryParams withSort(GetChannelSubscriptionsAlt1SortEnum sort) {
        this.sort = sort;
        return this;
    }
}