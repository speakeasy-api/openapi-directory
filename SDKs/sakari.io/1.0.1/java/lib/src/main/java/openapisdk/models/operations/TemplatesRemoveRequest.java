package openapisdk.models.operations;



public class TemplatesRemoveRequest {
    public TemplatesRemovePathParams pathParams;
    public TemplatesRemoveRequest withPathParams(TemplatesRemovePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TemplatesRemoveSecurity security;
    public TemplatesRemoveRequest withSecurity(TemplatesRemoveSecurity security) {
        this.security = security;
        return this;
    }
}