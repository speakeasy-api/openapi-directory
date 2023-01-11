package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListBrandVettingQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListBrandVettingQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=VettingProvider")
    public openapisdk.models.shared.BrandVettingEnumVettingProviderEnum vettingProvider;
    public ListBrandVettingQueryParams withVettingProvider(openapisdk.models.shared.BrandVettingEnumVettingProviderEnum vettingProvider) {
        this.vettingProvider = vettingProvider;
        return this;
    }
}