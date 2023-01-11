package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVideosWithTagQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public GetVideosWithTagDirectionEnum direction;
    public GetVideosWithTagQueryParams withDirection(GetVideosWithTagDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public GetVideosWithTagQueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Double perPage;
    public GetVideosWithTagQueryParams withPerPage(Double perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetVideosWithTagSortEnum sort;
    public GetVideosWithTagQueryParams withSort(GetVideosWithTagSortEnum sort) {
        this.sort = sort;
        return this;
    }
}