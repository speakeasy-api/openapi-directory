package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVodLikesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public GetVodLikesDirectionEnum direction;
    public GetVodLikesQueryParams withDirection(GetVodLikesDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public GetVodLikesFilterEnum filter;
    public GetVodLikesQueryParams withFilter(GetVodLikesFilterEnum filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public GetVodLikesQueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Double perPage;
    public GetVodLikesQueryParams withPerPage(Double perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetVodLikesSortEnum sort;
    public GetVodLikesQueryParams withSort(GetVodLikesSortEnum sort) {
        this.sort = sort;
        return this;
    }
}