package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTaxRateRequest {
    public UpdateTaxRatePathParams pathParams;
    public UpdateTaxRateRequest withPathParams(UpdateTaxRatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TaxRateUpdateRequest request;
    public UpdateTaxRateRequest withRequest(openapisdk.models.shared.TaxRateUpdateRequest request) {
        this.request = request;
        return this;
    }
    public UpdateTaxRateSecurity security;
    public UpdateTaxRateRequest withSecurity(UpdateTaxRateSecurity security) {
        this.security = security;
        return this;
    }
}