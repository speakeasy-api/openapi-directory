package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDiscountRequest {
    public CreateDiscountPathParams pathParams;
    public CreateDiscountRequest withPathParams(CreateDiscountPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DiscountRequest request;
    public CreateDiscountRequest withRequest(openapisdk.models.shared.DiscountRequest request) {
        this.request = request;
        return this;
    }
    public CreateDiscountSecurity security;
    public CreateDiscountRequest withSecurity(CreateDiscountSecurity security) {
        this.security = security;
        return this;
    }
}