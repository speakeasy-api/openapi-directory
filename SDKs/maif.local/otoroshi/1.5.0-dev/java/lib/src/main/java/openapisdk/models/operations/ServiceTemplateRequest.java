package openapisdk.models.operations;



public class ServiceTemplateRequest {
    public ServiceTemplatePathParams pathParams;
    public ServiceTemplateRequest withPathParams(ServiceTemplatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ServiceTemplateSecurity security;
    public ServiceTemplateRequest withSecurity(ServiceTemplateSecurity security) {
        this.security = security;
        return this;
    }
}