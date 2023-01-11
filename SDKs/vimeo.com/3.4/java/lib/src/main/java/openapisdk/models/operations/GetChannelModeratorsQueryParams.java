package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChannelModeratorsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public GetChannelModeratorsDirectionEnum direction;
    public GetChannelModeratorsQueryParams withDirection(GetChannelModeratorsDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public GetChannelModeratorsQueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Double perPage;
    public GetChannelModeratorsQueryParams withPerPage(Double perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public GetChannelModeratorsQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetChannelModeratorsSortEnum sort;
    public GetChannelModeratorsQueryParams withSort(GetChannelModeratorsSortEnum sort) {
        this.sort = sort;
        return this;
    }
}