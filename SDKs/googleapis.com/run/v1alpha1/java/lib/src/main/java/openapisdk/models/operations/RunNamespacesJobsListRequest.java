package openapisdk.models.operations;



public class RunNamespacesJobsListRequest {
    public RunNamespacesJobsListPathParams pathParams;
    public RunNamespacesJobsListRequest withPathParams(RunNamespacesJobsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RunNamespacesJobsListQueryParams queryParams;
    public RunNamespacesJobsListRequest withQueryParams(RunNamespacesJobsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public RunNamespacesJobsListSecurity security;
    public RunNamespacesJobsListRequest withSecurity(RunNamespacesJobsListSecurity security) {
        this.security = security;
        return this;
    }
}