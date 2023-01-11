package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateServiceTemplateRequest {
    public CreateServiceTemplatePathParams pathParams;
    public CreateServiceTemplateRequest withPathParams(CreateServiceTemplatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ErrorTemplate request;
    public CreateServiceTemplateRequest withRequest(openapisdk.models.shared.ErrorTemplate request) {
        this.request = request;
        return this;
    }
    public CreateServiceTemplateSecurity security;
    public CreateServiceTemplateRequest withSecurity(CreateServiceTemplateSecurity security) {
        this.security = security;
        return this;
    }
}