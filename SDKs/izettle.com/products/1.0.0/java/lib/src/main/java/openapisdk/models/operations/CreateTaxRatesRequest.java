package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTaxRatesRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TaxRatesCreateRequest request;
    public CreateTaxRatesRequest withRequest(openapisdk.models.shared.TaxRatesCreateRequest request) {
        this.request = request;
        return this;
    }
    public CreateTaxRatesSecurity security;
    public CreateTaxRatesRequest withSecurity(CreateTaxRatesSecurity security) {
        this.security = security;
        return this;
    }
}