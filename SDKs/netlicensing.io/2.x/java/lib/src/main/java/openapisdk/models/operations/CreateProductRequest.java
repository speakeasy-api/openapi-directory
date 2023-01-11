package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateProductRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateProductRequestBody request;
    public CreateProductRequest withRequest(CreateProductRequestBody request) {
        this.request = request;
        return this;
    }
    public CreateProductSecurity security;
    public CreateProductRequest withSecurity(CreateProductSecurity security) {
        this.security = security;
        return this;
    }
}