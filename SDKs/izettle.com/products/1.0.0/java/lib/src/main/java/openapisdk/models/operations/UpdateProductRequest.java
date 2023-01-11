package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateProductRequest {
    public UpdateProductPathParams pathParams;
    public UpdateProductRequest withPathParams(UpdateProductPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateProductHeaders headers;
    public UpdateProductRequest withHeaders(UpdateProductHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProductUpdateRequest request;
    public UpdateProductRequest withRequest(openapisdk.models.shared.ProductUpdateRequest request) {
        this.request = request;
        return this;
    }
    public UpdateProductSecurity security;
    public UpdateProductRequest withSecurity(UpdateProductSecurity security) {
        this.security = security;
        return this;
    }
}