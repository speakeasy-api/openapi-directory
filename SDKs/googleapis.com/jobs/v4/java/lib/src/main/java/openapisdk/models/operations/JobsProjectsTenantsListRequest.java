package openapisdk.models.operations;



public class JobsProjectsTenantsListRequest {
    public JobsProjectsTenantsListPathParams pathParams;
    public JobsProjectsTenantsListRequest withPathParams(JobsProjectsTenantsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public JobsProjectsTenantsListQueryParams queryParams;
    public JobsProjectsTenantsListRequest withQueryParams(JobsProjectsTenantsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public JobsProjectsTenantsListSecurity security;
    public JobsProjectsTenantsListRequest withSecurity(JobsProjectsTenantsListSecurity security) {
        this.security = security;
        return this;
    }
}