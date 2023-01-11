package openapisdk.models.operations;



public class RuntimeconfigProjectsConfigsListRequest {
    public RuntimeconfigProjectsConfigsListPathParams pathParams;
    public RuntimeconfigProjectsConfigsListRequest withPathParams(RuntimeconfigProjectsConfigsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RuntimeconfigProjectsConfigsListQueryParams queryParams;
    public RuntimeconfigProjectsConfigsListRequest withQueryParams(RuntimeconfigProjectsConfigsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public RuntimeconfigProjectsConfigsListSecurity security;
    public RuntimeconfigProjectsConfigsListRequest withSecurity(RuntimeconfigProjectsConfigsListSecurity security) {
        this.security = security;
        return this;
    }
}