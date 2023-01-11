package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchEverywhereQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include[]")
    public SearchEverywhereIncludeEnum[] include;
    public SearchEverywhereQueryParams withInclude(SearchEverywhereIncludeEnum[] include) {
        this.include = include;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public SearchEverywhereQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public SearchEverywhereQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public SearchEverywhereQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
}