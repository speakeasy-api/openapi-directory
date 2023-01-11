package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherMonetizationConvertRegionPricesRequest {
    public AndroidpublisherMonetizationConvertRegionPricesPathParams pathParams;
    public AndroidpublisherMonetizationConvertRegionPricesRequest withPathParams(AndroidpublisherMonetizationConvertRegionPricesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AndroidpublisherMonetizationConvertRegionPricesQueryParams queryParams;
    public AndroidpublisherMonetizationConvertRegionPricesRequest withQueryParams(AndroidpublisherMonetizationConvertRegionPricesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ConvertRegionPricesRequest request;
    public AndroidpublisherMonetizationConvertRegionPricesRequest withRequest(openapisdk.models.shared.ConvertRegionPricesRequest request) {
        this.request = request;
        return this;
    }
    public AndroidpublisherMonetizationConvertRegionPricesSecurity security;
    public AndroidpublisherMonetizationConvertRegionPricesRequest withSecurity(AndroidpublisherMonetizationConvertRegionPricesSecurity security) {
        this.security = security;
        return this;
    }
}