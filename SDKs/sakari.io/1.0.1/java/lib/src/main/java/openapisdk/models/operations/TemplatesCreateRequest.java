package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TemplatesCreateRequest {
    public TemplatesCreatePathParams pathParams;
    public TemplatesCreateRequest withPathParams(TemplatesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TemplateRequest request;
    public TemplatesCreateRequest withRequest(openapisdk.models.shared.TemplateRequest request) {
        this.request = request;
        return this;
    }
    public TemplatesCreateSecurity security;
    public TemplatesCreateRequest withSecurity(TemplatesCreateSecurity security) {
        this.security = security;
        return this;
    }
}