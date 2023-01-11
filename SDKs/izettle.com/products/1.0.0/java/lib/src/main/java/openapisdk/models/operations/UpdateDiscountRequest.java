package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDiscountRequest {
    public UpdateDiscountPathParams pathParams;
    public UpdateDiscountRequest withPathParams(UpdateDiscountPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateDiscountHeaders headers;
    public UpdateDiscountRequest withHeaders(UpdateDiscountHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DiscountRequest request;
    public UpdateDiscountRequest withRequest(openapisdk.models.shared.DiscountRequest request) {
        this.request = request;
        return this;
    }
    public UpdateDiscountSecurity security;
    public UpdateDiscountRequest withSecurity(UpdateDiscountSecurity security) {
        this.security = security;
        return this;
    }
}