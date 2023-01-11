package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVodVideosQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public GetVodVideosDirectionEnum direction;
    public GetVodVideosQueryParams withDirection(GetVodVideosDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public GetVodVideosFilterEnum filter;
    public GetVodVideosQueryParams withFilter(GetVodVideosFilterEnum filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public GetVodVideosQueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Double perPage;
    public GetVodVideosQueryParams withPerPage(Double perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetVodVideosSortEnum sort;
    public GetVodVideosQueryParams withSort(GetVodVideosSortEnum sort) {
        this.sort = sort;
        return this;
    }
}