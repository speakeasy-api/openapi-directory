package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVideoCreditsAlt1QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public GetVideoCreditsAlt1DirectionEnum direction;
    public GetVideoCreditsAlt1QueryParams withDirection(GetVideoCreditsAlt1DirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public GetVideoCreditsAlt1QueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Double perPage;
    public GetVideoCreditsAlt1QueryParams withPerPage(Double perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public GetVideoCreditsAlt1QueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetVideoCreditsAlt1SortEnum sort;
    public GetVideoCreditsAlt1QueryParams withSort(GetVideoCreditsAlt1SortEnum sort) {
        this.sort = sort;
        return this;
    }
}