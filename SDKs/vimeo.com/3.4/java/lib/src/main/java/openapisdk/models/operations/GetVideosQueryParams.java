package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVideosQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=containing_uri")
    public String containingUri;
    public GetVideosQueryParams withContainingUri(String containingUri) {
        this.containingUri = containingUri;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public GetVideosDirectionEnum direction;
    public GetVideosQueryParams withDirection(GetVideosDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public GetVideosFilterEnum filter;
    public GetVideosQueryParams withFilter(GetVideosFilterEnum filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter_embeddable")
    public Boolean filterEmbeddable;
    public GetVideosQueryParams withFilterEmbeddable(Boolean filterEmbeddable) {
        this.filterEmbeddable = filterEmbeddable;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter_playable")
    public Boolean filterPlayable;
    public GetVideosQueryParams withFilterPlayable(Boolean filterPlayable) {
        this.filterPlayable = filterPlayable;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public GetVideosQueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Double perPage;
    public GetVideosQueryParams withPerPage(Double perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public GetVideosQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetVideosSortEnum sort;
    public GetVideosQueryParams withSort(GetVideosSortEnum sort) {
        this.sort = sort;
        return this;
    }
}