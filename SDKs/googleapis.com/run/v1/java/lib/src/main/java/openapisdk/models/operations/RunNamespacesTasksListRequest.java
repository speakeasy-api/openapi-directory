package openapisdk.models.operations;



public class RunNamespacesTasksListRequest {
    public RunNamespacesTasksListPathParams pathParams;
    public RunNamespacesTasksListRequest withPathParams(RunNamespacesTasksListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RunNamespacesTasksListQueryParams queryParams;
    public RunNamespacesTasksListRequest withQueryParams(RunNamespacesTasksListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public RunNamespacesTasksListSecurity security;
    public RunNamespacesTasksListRequest withSecurity(RunNamespacesTasksListSecurity security) {
        this.security = security;
        return this;
    }
}