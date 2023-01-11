package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVideosAlt1QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=containing_uri")
    public String containingUri;
    public GetVideosAlt1QueryParams withContainingUri(String containingUri) {
        this.containingUri = containingUri;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public GetVideosAlt1DirectionEnum direction;
    public GetVideosAlt1QueryParams withDirection(GetVideosAlt1DirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public GetVideosAlt1FilterEnum filter;
    public GetVideosAlt1QueryParams withFilter(GetVideosAlt1FilterEnum filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter_embeddable")
    public Boolean filterEmbeddable;
    public GetVideosAlt1QueryParams withFilterEmbeddable(Boolean filterEmbeddable) {
        this.filterEmbeddable = filterEmbeddable;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter_playable")
    public Boolean filterPlayable;
    public GetVideosAlt1QueryParams withFilterPlayable(Boolean filterPlayable) {
        this.filterPlayable = filterPlayable;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public GetVideosAlt1QueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Double perPage;
    public GetVideosAlt1QueryParams withPerPage(Double perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public GetVideosAlt1QueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetVideosAlt1SortEnum sort;
    public GetVideosAlt1QueryParams withSort(GetVideosAlt1SortEnum sort) {
        this.sort = sort;
        return this;
    }
}