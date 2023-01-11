package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddLocalTaxRequest {
    public AddLocalTaxPathParams pathParams;
    public AddLocalTaxRequest withPathParams(AddLocalTaxPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LocalTax request;
    public AddLocalTaxRequest withRequest(openapisdk.models.shared.LocalTax request) {
        this.request = request;
        return this;
    }
    public AddLocalTaxSecurity security;
    public AddLocalTaxRequest withSecurity(AddLocalTaxSecurity security) {
        this.security = security;
        return this;
    }
}