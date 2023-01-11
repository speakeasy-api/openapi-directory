package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateServiceTemplateRequest {
    public UpdateServiceTemplatePathParams pathParams;
    public UpdateServiceTemplateRequest withPathParams(UpdateServiceTemplatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ErrorTemplate request;
    public UpdateServiceTemplateRequest withRequest(openapisdk.models.shared.ErrorTemplate request) {
        this.request = request;
        return this;
    }
    public UpdateServiceTemplateSecurity security;
    public UpdateServiceTemplateRequest withSecurity(UpdateServiceTemplateSecurity security) {
        this.security = security;
        return this;
    }
}