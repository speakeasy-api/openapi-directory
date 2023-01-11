package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVodPurchasesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public GetVodPurchasesDirectionEnum direction;
    public GetVodPurchasesQueryParams withDirection(GetVodPurchasesDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public GetVodPurchasesFilterEnum filter;
    public GetVodPurchasesQueryParams withFilter(GetVodPurchasesFilterEnum filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public GetVodPurchasesQueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Double perPage;
    public GetVodPurchasesQueryParams withPerPage(Double perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetVodPurchasesSortEnum sort;
    public GetVodPurchasesQueryParams withSort(GetVodPurchasesSortEnum sort) {
        this.sort = sort;
        return this;
    }
}