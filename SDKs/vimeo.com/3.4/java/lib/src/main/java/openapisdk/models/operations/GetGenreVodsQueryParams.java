package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGenreVodsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public GetGenreVodsDirectionEnum direction;
    public GetGenreVodsQueryParams withDirection(GetGenreVodsDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public GetGenreVodsFilterEnum filter;
    public GetGenreVodsQueryParams withFilter(GetGenreVodsFilterEnum filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public GetGenreVodsQueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Double perPage;
    public GetGenreVodsQueryParams withPerPage(Double perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public GetGenreVodsQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetGenreVodsSortEnum sort;
    public GetGenreVodsQueryParams withSort(GetGenreVodsSortEnum sort) {
        this.sort = sort;
        return this;
    }
}