package openapisdk.models.operations;



public class RunNamespacesTasksGetRequest {
    public RunNamespacesTasksGetPathParams pathParams;
    public RunNamespacesTasksGetRequest withPathParams(RunNamespacesTasksGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RunNamespacesTasksGetQueryParams queryParams;
    public RunNamespacesTasksGetRequest withQueryParams(RunNamespacesTasksGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public RunNamespacesTasksGetSecurity security;
    public RunNamespacesTasksGetRequest withSecurity(RunNamespacesTasksGetSecurity security) {
        this.security = security;
        return this;
    }
}