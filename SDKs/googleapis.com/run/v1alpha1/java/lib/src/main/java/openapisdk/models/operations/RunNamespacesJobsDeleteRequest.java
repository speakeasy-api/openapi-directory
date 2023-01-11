package openapisdk.models.operations;



public class RunNamespacesJobsDeleteRequest {
    public RunNamespacesJobsDeletePathParams pathParams;
    public RunNamespacesJobsDeleteRequest withPathParams(RunNamespacesJobsDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RunNamespacesJobsDeleteQueryParams queryParams;
    public RunNamespacesJobsDeleteRequest withQueryParams(RunNamespacesJobsDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public RunNamespacesJobsDeleteSecurity security;
    public RunNamespacesJobsDeleteRequest withSecurity(RunNamespacesJobsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}