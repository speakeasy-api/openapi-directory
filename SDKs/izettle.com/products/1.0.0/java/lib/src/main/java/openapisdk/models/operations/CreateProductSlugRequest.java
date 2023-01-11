package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateProductSlugRequest {
    public CreateProductSlugPathParams pathParams;
    public CreateProductSlugRequest withPathParams(CreateProductSlugPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateSlugRequest request;
    public CreateProductSlugRequest withRequest(openapisdk.models.shared.CreateSlugRequest request) {
        this.request = request;
        return this;
    }
    public CreateProductSlugSecurity security;
    public CreateProductSlugRequest withSecurity(CreateProductSlugSecurity security) {
        this.security = security;
        return this;
    }
}