package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWatchLaterQueueAlt1QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public GetWatchLaterQueueAlt1DirectionEnum direction;
    public GetWatchLaterQueueAlt1QueryParams withDirection(GetWatchLaterQueueAlt1DirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public GetWatchLaterQueueAlt1FilterEnum filter;
    public GetWatchLaterQueueAlt1QueryParams withFilter(GetWatchLaterQueueAlt1FilterEnum filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter_embeddable")
    public Boolean filterEmbeddable;
    public GetWatchLaterQueueAlt1QueryParams withFilterEmbeddable(Boolean filterEmbeddable) {
        this.filterEmbeddable = filterEmbeddable;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public GetWatchLaterQueueAlt1QueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Double perPage;
    public GetWatchLaterQueueAlt1QueryParams withPerPage(Double perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public GetWatchLaterQueueAlt1QueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetWatchLaterQueueAlt1SortEnum sort;
    public GetWatchLaterQueueAlt1QueryParams withSort(GetWatchLaterQueueAlt1SortEnum sort) {
        this.sort = sort;
        return this;
    }
}