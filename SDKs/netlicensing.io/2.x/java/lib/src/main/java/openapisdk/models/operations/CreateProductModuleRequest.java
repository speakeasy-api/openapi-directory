package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateProductModuleRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateProductModuleRequestBody request;
    public CreateProductModuleRequest withRequest(CreateProductModuleRequestBody request) {
        this.request = request;
        return this;
    }
    public CreateProductModuleSecurity security;
    public CreateProductModuleRequest withSecurity(CreateProductModuleSecurity security) {
        this.security = security;
        return this;
    }
}