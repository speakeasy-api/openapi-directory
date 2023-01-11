package openapisdk.models.operations;



public class JobsProjectsCompaniesListRequest {
    public JobsProjectsCompaniesListPathParams pathParams;
    public JobsProjectsCompaniesListRequest withPathParams(JobsProjectsCompaniesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public JobsProjectsCompaniesListQueryParams queryParams;
    public JobsProjectsCompaniesListRequest withQueryParams(JobsProjectsCompaniesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public JobsProjectsCompaniesListSecurity security;
    public JobsProjectsCompaniesListRequest withSecurity(JobsProjectsCompaniesListSecurity security) {
        this.security = security;
        return this;
    }
}