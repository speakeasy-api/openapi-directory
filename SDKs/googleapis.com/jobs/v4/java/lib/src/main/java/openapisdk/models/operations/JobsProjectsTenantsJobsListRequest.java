package openapisdk.models.operations;



public class JobsProjectsTenantsJobsListRequest {
    public JobsProjectsTenantsJobsListPathParams pathParams;
    public JobsProjectsTenantsJobsListRequest withPathParams(JobsProjectsTenantsJobsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public JobsProjectsTenantsJobsListQueryParams queryParams;
    public JobsProjectsTenantsJobsListRequest withQueryParams(JobsProjectsTenantsJobsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public JobsProjectsTenantsJobsListSecurity security;
    public JobsProjectsTenantsJobsListRequest withSecurity(JobsProjectsTenantsJobsListSecurity security) {
        this.security = security;
        return this;
    }
}