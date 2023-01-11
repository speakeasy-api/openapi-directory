package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateProductModuleRequest {
    public UpdateProductModulePathParams pathParams;
    public UpdateProductModuleRequest withPathParams(UpdateProductModulePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateProductModuleRequestBody request;
    public UpdateProductModuleRequest withRequest(UpdateProductModuleRequestBody request) {
        this.request = request;
        return this;
    }
    public UpdateProductModuleSecurity security;
    public UpdateProductModuleRequest withSecurity(UpdateProductModuleSecurity security) {
        this.security = security;
        return this;
    }
}