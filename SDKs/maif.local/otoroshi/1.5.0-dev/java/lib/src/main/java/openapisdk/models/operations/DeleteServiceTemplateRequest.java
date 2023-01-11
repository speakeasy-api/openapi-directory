package openapisdk.models.operations;



public class DeleteServiceTemplateRequest {
    public DeleteServiceTemplatePathParams pathParams;
    public DeleteServiceTemplateRequest withPathParams(DeleteServiceTemplatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteServiceTemplateSecurity security;
    public DeleteServiceTemplateRequest withSecurity(DeleteServiceTemplateSecurity security) {
        this.security = security;
        return this;
    }
}