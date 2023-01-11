package openapisdk.models.operations;



public class RunNamespacesJobsGetRequest {
    public RunNamespacesJobsGetPathParams pathParams;
    public RunNamespacesJobsGetRequest withPathParams(RunNamespacesJobsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RunNamespacesJobsGetQueryParams queryParams;
    public RunNamespacesJobsGetRequest withQueryParams(RunNamespacesJobsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public RunNamespacesJobsGetSecurity security;
    public RunNamespacesJobsGetRequest withSecurity(RunNamespacesJobsGetSecurity security) {
        this.security = security;
        return this;
    }
}