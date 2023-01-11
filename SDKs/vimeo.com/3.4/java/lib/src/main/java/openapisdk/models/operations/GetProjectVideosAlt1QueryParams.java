package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProjectVideosAlt1QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public GetProjectVideosAlt1DirectionEnum direction;
    public GetProjectVideosAlt1QueryParams withDirection(GetProjectVideosAlt1DirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public GetProjectVideosAlt1QueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Double perPage;
    public GetProjectVideosAlt1QueryParams withPerPage(Double perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetProjectVideosAlt1SortEnum sort;
    public GetProjectVideosAlt1QueryParams withSort(GetProjectVideosAlt1SortEnum sort) {
        this.sort = sort;
        return this;
    }
}