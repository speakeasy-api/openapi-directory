package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVodSeasonsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public GetVodSeasonsDirectionEnum direction;
    public GetVodSeasonsQueryParams withDirection(GetVodSeasonsDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public GetVodSeasonsFilterEnum filter;
    public GetVodSeasonsQueryParams withFilter(GetVodSeasonsFilterEnum filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public GetVodSeasonsQueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Double perPage;
    public GetVodSeasonsQueryParams withPerPage(Double perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetVodSeasonsSortEnum sort;
    public GetVodSeasonsQueryParams withSort(GetVodSeasonsSortEnum sort) {
        this.sort = sort;
        return this;
    }
}