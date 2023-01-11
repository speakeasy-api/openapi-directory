package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVodSeasonVideosQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public GetVodSeasonVideosFilterEnum filter;
    public GetVodSeasonVideosQueryParams withFilter(GetVodSeasonVideosFilterEnum filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public GetVodSeasonVideosQueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Double perPage;
    public GetVodSeasonVideosQueryParams withPerPage(Double perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetVodSeasonVideosSortEnum sort;
    public GetVodSeasonVideosQueryParams withSort(GetVodSeasonVideosSortEnum sort) {
        this.sort = sort;
        return this;
    }
}