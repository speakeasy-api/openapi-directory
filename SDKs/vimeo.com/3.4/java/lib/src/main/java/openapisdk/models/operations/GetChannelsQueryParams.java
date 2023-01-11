package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChannelsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public GetChannelsDirectionEnum direction;
    public GetChannelsQueryParams withDirection(GetChannelsDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public GetChannelsFilterEnum filter;
    public GetChannelsQueryParams withFilter(GetChannelsFilterEnum filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public GetChannelsQueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Double perPage;
    public GetChannelsQueryParams withPerPage(Double perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public GetChannelsQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetChannelsSortEnum sort;
    public GetChannelsQueryParams withSort(GetChannelsSortEnum sort) {
        this.sort = sort;
        return this;
    }
}