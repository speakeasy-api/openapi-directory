package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPortfoliosQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public GetPortfoliosDirectionEnum direction;
    public GetPortfoliosQueryParams withDirection(GetPortfoliosDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public GetPortfoliosQueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Double perPage;
    public GetPortfoliosQueryParams withPerPage(Double perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public GetPortfoliosQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetPortfoliosSortEnum sort;
    public GetPortfoliosQueryParams withSort(GetPortfoliosSortEnum sort) {
        this.sort = sort;
        return this;
    }
}