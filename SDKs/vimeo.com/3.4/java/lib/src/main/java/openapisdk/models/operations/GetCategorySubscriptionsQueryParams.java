package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCategorySubscriptionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public GetCategorySubscriptionsDirectionEnum direction;
    public GetCategorySubscriptionsQueryParams withDirection(GetCategorySubscriptionsDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public GetCategorySubscriptionsQueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Double perPage;
    public GetCategorySubscriptionsQueryParams withPerPage(Double perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetCategorySubscriptionsSortEnum sort;
    public GetCategorySubscriptionsQueryParams withSort(GetCategorySubscriptionsSortEnum sort) {
        this.sort = sort;
        return this;
    }
}