package openapisdk.models.operations;



public class TemplatesFetchAllRequest {
    public TemplatesFetchAllPathParams pathParams;
    public TemplatesFetchAllRequest withPathParams(TemplatesFetchAllPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TemplatesFetchAllQueryParams queryParams;
    public TemplatesFetchAllRequest withQueryParams(TemplatesFetchAllQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TemplatesFetchAllSecurity security;
    public TemplatesFetchAllRequest withSecurity(TemplatesFetchAllSecurity security) {
        this.security = security;
        return this;
    }
}