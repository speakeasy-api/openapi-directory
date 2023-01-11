package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCategoryVideosQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public GetCategoryVideosDirectionEnum direction;
    public GetCategoryVideosQueryParams withDirection(GetCategoryVideosDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public GetCategoryVideosFilterEnum filter;
    public GetCategoryVideosQueryParams withFilter(GetCategoryVideosFilterEnum filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter_embeddable")
    public Boolean filterEmbeddable;
    public GetCategoryVideosQueryParams withFilterEmbeddable(Boolean filterEmbeddable) {
        this.filterEmbeddable = filterEmbeddable;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public GetCategoryVideosQueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Double perPage;
    public GetCategoryVideosQueryParams withPerPage(Double perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public GetCategoryVideosQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetCategoryVideosSortEnum sort;
    public GetCategoryVideosQueryParams withSort(GetCategoryVideosSortEnum sort) {
        this.sort = sort;
        return this;
    }
}