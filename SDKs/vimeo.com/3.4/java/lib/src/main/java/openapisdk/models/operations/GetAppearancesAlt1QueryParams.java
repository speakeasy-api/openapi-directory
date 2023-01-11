package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAppearancesAlt1QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public GetAppearancesAlt1DirectionEnum direction;
    public GetAppearancesAlt1QueryParams withDirection(GetAppearancesAlt1DirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public GetAppearancesAlt1FilterEnum filter;
    public GetAppearancesAlt1QueryParams withFilter(GetAppearancesAlt1FilterEnum filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter_embeddable")
    public Boolean filterEmbeddable;
    public GetAppearancesAlt1QueryParams withFilterEmbeddable(Boolean filterEmbeddable) {
        this.filterEmbeddable = filterEmbeddable;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public GetAppearancesAlt1QueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Double perPage;
    public GetAppearancesAlt1QueryParams withPerPage(Double perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public GetAppearancesAlt1QueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetAppearancesAlt1SortEnum sort;
    public GetAppearancesAlt1QueryParams withSort(GetAppearancesAlt1SortEnum sort) {
        this.sort = sort;
        return this;
    }
}