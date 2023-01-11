package openapisdk.models.operations;



public class DataprocProjectsRegionsJobsListRequest {
    public DataprocProjectsRegionsJobsListPathParams pathParams;
    public DataprocProjectsRegionsJobsListRequest withPathParams(DataprocProjectsRegionsJobsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DataprocProjectsRegionsJobsListQueryParams queryParams;
    public DataprocProjectsRegionsJobsListRequest withQueryParams(DataprocProjectsRegionsJobsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DataprocProjectsRegionsJobsListSecurity security;
    public DataprocProjectsRegionsJobsListRequest withSecurity(DataprocProjectsRegionsJobsListSecurity security) {
        this.security = security;
        return this;
    }
}