package openapisdk.models.operations;



public class JobsProjectsTenantsCompaniesListRequest {
    public JobsProjectsTenantsCompaniesListPathParams pathParams;
    public JobsProjectsTenantsCompaniesListRequest withPathParams(JobsProjectsTenantsCompaniesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public JobsProjectsTenantsCompaniesListQueryParams queryParams;
    public JobsProjectsTenantsCompaniesListRequest withQueryParams(JobsProjectsTenantsCompaniesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public JobsProjectsTenantsCompaniesListSecurity security;
    public JobsProjectsTenantsCompaniesListRequest withSecurity(JobsProjectsTenantsCompaniesListSecurity security) {
        this.security = security;
        return this;
    }
}