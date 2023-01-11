package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCountriesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=marketId")
    public String marketId;
    public GetCountriesQueryParams withMarketId(String marketId) {
        this.marketId = marketId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order")
    public GetCountriesOrderEnum order;
    public GetCountriesQueryParams withOrder(GetCountriesOrderEnum order) {
        this.order = order;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=regionName")
    public String regionName;
    public GetCountriesQueryParams withRegionName(String regionName) {
        this.regionName = regionName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=regionTypeId")
    public Long regionTypeId;
    public GetCountriesQueryParams withRegionTypeId(Long regionTypeId) {
        this.regionTypeId = regionTypeId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetCountriesSortEnum sort;
    public GetCountriesQueryParams withSort(GetCountriesSortEnum sort) {
        this.sort = sort;
        return this;
    }
}