package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVideoLikesAlt1QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public GetVideoLikesAlt1DirectionEnum direction;
    public GetVideoLikesAlt1QueryParams withDirection(GetVideoLikesAlt1DirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public GetVideoLikesAlt1QueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Double perPage;
    public GetVideoLikesAlt1QueryParams withPerPage(Double perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetVideoLikesAlt1SortEnum sort;
    public GetVideoLikesAlt1QueryParams withSort(GetVideoLikesAlt1SortEnum sort) {
        this.sort = sort;
        return this;
    }
}