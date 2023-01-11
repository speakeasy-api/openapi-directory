package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPortfolioVideosAlt1QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=containing_uri")
    public String containingUri;
    public GetPortfolioVideosAlt1QueryParams withContainingUri(String containingUri) {
        this.containingUri = containingUri;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public GetPortfolioVideosAlt1FilterEnum filter;
    public GetPortfolioVideosAlt1QueryParams withFilter(GetPortfolioVideosAlt1FilterEnum filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter_embeddable")
    public Boolean filterEmbeddable;
    public GetPortfolioVideosAlt1QueryParams withFilterEmbeddable(Boolean filterEmbeddable) {
        this.filterEmbeddable = filterEmbeddable;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public GetPortfolioVideosAlt1QueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Double perPage;
    public GetPortfolioVideosAlt1QueryParams withPerPage(Double perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetPortfolioVideosAlt1SortEnum sort;
    public GetPortfolioVideosAlt1QueryParams withSort(GetPortfolioVideosAlt1SortEnum sort) {
        this.sort = sort;
        return this;
    }
}