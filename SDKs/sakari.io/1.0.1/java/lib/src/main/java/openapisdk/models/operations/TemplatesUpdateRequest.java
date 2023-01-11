package openapisdk.models.operations;



public class TemplatesUpdateRequest {
    public TemplatesUpdatePathParams pathParams;
    public TemplatesUpdateRequest withPathParams(TemplatesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TemplatesUpdateSecurity security;
    public TemplatesUpdateRequest withSecurity(TemplatesUpdateSecurity security) {
        this.security = security;
        return this;
    }
}