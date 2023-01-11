package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCountryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=marketId")
    public String marketId;
    public GetCountryQueryParams withMarketId(String marketId) {
        this.marketId = marketId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order")
    public GetCountryOrderEnum order;
    public GetCountryQueryParams withOrder(GetCountryOrderEnum order) {
        this.order = order;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetCountrySortEnum sort;
    public GetCountryQueryParams withSort(GetCountrySortEnum sort) {
        this.sort = sort;
        return this;
    }
}