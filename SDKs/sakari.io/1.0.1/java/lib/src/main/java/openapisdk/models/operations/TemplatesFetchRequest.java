package openapisdk.models.operations;



public class TemplatesFetchRequest {
    public TemplatesFetchPathParams pathParams;
    public TemplatesFetchRequest withPathParams(TemplatesFetchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TemplatesFetchSecurity security;
    public TemplatesFetchRequest withSecurity(TemplatesFetchSecurity security) {
        this.security = security;
        return this;
    }
}