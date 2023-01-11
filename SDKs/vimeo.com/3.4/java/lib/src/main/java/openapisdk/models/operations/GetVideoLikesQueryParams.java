package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVideoLikesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public GetVideoLikesDirectionEnum direction;
    public GetVideoLikesQueryParams withDirection(GetVideoLikesDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public GetVideoLikesQueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Double perPage;
    public GetVideoLikesQueryParams withPerPage(Double perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetVideoLikesSortEnum sort;
    public GetVideoLikesQueryParams withSort(GetVideoLikesSortEnum sort) {
        this.sort = sort;
        return this;
    }
}