package openapisdk.models.operations;



public class RunNamespacesExecutionsListRequest {
    public RunNamespacesExecutionsListPathParams pathParams;
    public RunNamespacesExecutionsListRequest withPathParams(RunNamespacesExecutionsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RunNamespacesExecutionsListQueryParams queryParams;
    public RunNamespacesExecutionsListRequest withQueryParams(RunNamespacesExecutionsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public RunNamespacesExecutionsListSecurity security;
    public RunNamespacesExecutionsListRequest withSecurity(RunNamespacesExecutionsListSecurity security) {
        this.security = security;
        return this;
    }
}