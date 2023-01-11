package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateProductRequest {
    public CreateProductPathParams pathParams;
    public CreateProductRequest withPathParams(CreateProductPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateProductQueryParams queryParams;
    public CreateProductRequest withQueryParams(CreateProductQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProductCreateRequest request;
    public CreateProductRequest withRequest(openapisdk.models.shared.ProductCreateRequest request) {
        this.request = request;
        return this;
    }
    public CreateProductSecurity security;
    public CreateProductRequest withSecurity(CreateProductSecurity security) {
        this.security = security;
        return this;
    }
}