package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPortfolioVideosQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=containing_uri")
    public String containingUri;
    public GetPortfolioVideosQueryParams withContainingUri(String containingUri) {
        this.containingUri = containingUri;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public GetPortfolioVideosFilterEnum filter;
    public GetPortfolioVideosQueryParams withFilter(GetPortfolioVideosFilterEnum filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter_embeddable")
    public Boolean filterEmbeddable;
    public GetPortfolioVideosQueryParams withFilterEmbeddable(Boolean filterEmbeddable) {
        this.filterEmbeddable = filterEmbeddable;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public GetPortfolioVideosQueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Double perPage;
    public GetPortfolioVideosQueryParams withPerPage(Double perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetPortfolioVideosSortEnum sort;
    public GetPortfolioVideosQueryParams withSort(GetPortfolioVideosSortEnum sort) {
        this.sort = sort;
        return this;
    }
}