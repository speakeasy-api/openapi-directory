package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPortfoliosAlt1QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public GetPortfoliosAlt1DirectionEnum direction;
    public GetPortfoliosAlt1QueryParams withDirection(GetPortfoliosAlt1DirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public GetPortfoliosAlt1QueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Double perPage;
    public GetPortfoliosAlt1QueryParams withPerPage(Double perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public GetPortfoliosAlt1QueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetPortfoliosAlt1SortEnum sort;
    public GetPortfoliosAlt1QueryParams withSort(GetPortfoliosAlt1SortEnum sort) {
        this.sort = sort;
        return this;
    }
}