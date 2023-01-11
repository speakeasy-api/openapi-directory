package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAlbumsAlt1QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public GetAlbumsAlt1DirectionEnum direction;
    public GetAlbumsAlt1QueryParams withDirection(GetAlbumsAlt1DirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public GetAlbumsAlt1QueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Double perPage;
    public GetAlbumsAlt1QueryParams withPerPage(Double perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public GetAlbumsAlt1QueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetAlbumsAlt1SortEnum sort;
    public GetAlbumsAlt1QueryParams withSort(GetAlbumsAlt1SortEnum sort) {
        this.sort = sort;
        return this;
    }
}