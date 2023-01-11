package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLikesAlt1QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public GetLikesAlt1FilterEnum filter;
    public GetLikesAlt1QueryParams withFilter(GetLikesAlt1FilterEnum filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter_embeddable")
    public Boolean filterEmbeddable;
    public GetLikesAlt1QueryParams withFilterEmbeddable(Boolean filterEmbeddable) {
        this.filterEmbeddable = filterEmbeddable;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public GetLikesAlt1QueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Double perPage;
    public GetLikesAlt1QueryParams withPerPage(Double perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public GetLikesAlt1QueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetLikesAlt1SortEnum sort;
    public GetLikesAlt1QueryParams withSort(GetLikesAlt1SortEnum sort) {
        this.sort = sort;
        return this;
    }
}