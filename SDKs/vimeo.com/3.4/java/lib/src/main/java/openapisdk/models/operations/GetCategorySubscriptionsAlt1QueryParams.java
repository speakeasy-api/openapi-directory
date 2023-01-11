package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCategorySubscriptionsAlt1QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public GetCategorySubscriptionsAlt1DirectionEnum direction;
    public GetCategorySubscriptionsAlt1QueryParams withDirection(GetCategorySubscriptionsAlt1DirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public GetCategorySubscriptionsAlt1QueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Double perPage;
    public GetCategorySubscriptionsAlt1QueryParams withPerPage(Double perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetCategorySubscriptionsAlt1SortEnum sort;
    public GetCategorySubscriptionsAlt1QueryParams withSort(GetCategorySubscriptionsAlt1SortEnum sort) {
        this.sort = sort;
        return this;
    }
}