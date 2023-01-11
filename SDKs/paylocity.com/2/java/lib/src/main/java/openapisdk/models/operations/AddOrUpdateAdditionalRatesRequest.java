package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddOrUpdateAdditionalRatesRequest {
    public AddOrUpdateAdditionalRatesPathParams pathParams;
    public AddOrUpdateAdditionalRatesRequest withPathParams(AddOrUpdateAdditionalRatesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AdditionalRate request;
    public AddOrUpdateAdditionalRatesRequest withRequest(openapisdk.models.shared.AdditionalRate request) {
        this.request = request;
        return this;
    }
    public AddOrUpdateAdditionalRatesSecurity security;
    public AddOrUpdateAdditionalRatesRequest withSecurity(AddOrUpdateAdditionalRatesSecurity security) {
        this.security = security;
        return this;
    }
}