package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVodPromotionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public GetVodPromotionsFilterEnum filter;
    public GetVodPromotionsQueryParams withFilter(GetVodPromotionsFilterEnum filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public GetVodPromotionsQueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Double perPage;
    public GetVodPromotionsQueryParams withPerPage(Double perPage) {
        this.perPage = perPage;
        return this;
    }
}