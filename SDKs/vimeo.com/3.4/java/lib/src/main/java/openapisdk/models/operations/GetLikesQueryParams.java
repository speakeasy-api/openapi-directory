package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLikesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public GetLikesFilterEnum filter;
    public GetLikesQueryParams withFilter(GetLikesFilterEnum filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter_embeddable")
    public Boolean filterEmbeddable;
    public GetLikesQueryParams withFilterEmbeddable(Boolean filterEmbeddable) {
        this.filterEmbeddable = filterEmbeddable;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public GetLikesQueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Double perPage;
    public GetLikesQueryParams withPerPage(Double perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public GetLikesQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetLikesSortEnum sort;
    public GetLikesQueryParams withSort(GetLikesSortEnum sort) {
        this.sort = sort;
        return this;
    }
}