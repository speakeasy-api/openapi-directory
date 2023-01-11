package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCategoriesRequest {
    public CreateCategoriesPathParams pathParams;
    public CreateCategoriesRequest withPathParams(CreateCategoriesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CategoryRequest request;
    public CreateCategoriesRequest withRequest(openapisdk.models.shared.CategoryRequest request) {
        this.request = request;
        return this;
    }
    public CreateCategoriesSecurity security;
    public CreateCategoriesRequest withSecurity(CreateCategoriesSecurity security) {
        this.security = security;
        return this;
    }
}