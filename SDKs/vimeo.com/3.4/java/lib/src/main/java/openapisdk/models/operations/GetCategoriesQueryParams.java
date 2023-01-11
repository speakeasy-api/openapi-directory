package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCategoriesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public GetCategoriesDirectionEnum direction;
    public GetCategoriesQueryParams withDirection(GetCategoriesDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public GetCategoriesQueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Double perPage;
    public GetCategoriesQueryParams withPerPage(Double perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetCategoriesSortEnum sort;
    public GetCategoriesQueryParams withSort(GetCategoriesSortEnum sort) {
        this.sort = sort;
        return this;
    }
}