package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChannelVideosQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=containing_uri")
    public String containingUri;
    public GetChannelVideosQueryParams withContainingUri(String containingUri) {
        this.containingUri = containingUri;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public GetChannelVideosDirectionEnum direction;
    public GetChannelVideosQueryParams withDirection(GetChannelVideosDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public GetChannelVideosFilterEnum filter;
    public GetChannelVideosQueryParams withFilter(GetChannelVideosFilterEnum filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter_embeddable")
    public Boolean filterEmbeddable;
    public GetChannelVideosQueryParams withFilterEmbeddable(Boolean filterEmbeddable) {
        this.filterEmbeddable = filterEmbeddable;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public GetChannelVideosQueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Double perPage;
    public GetChannelVideosQueryParams withPerPage(Double perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public GetChannelVideosQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetChannelVideosSortEnum sort;
    public GetChannelVideosQueryParams withSort(GetChannelVideosSortEnum sort) {
        this.sort = sort;
        return this;
    }
}