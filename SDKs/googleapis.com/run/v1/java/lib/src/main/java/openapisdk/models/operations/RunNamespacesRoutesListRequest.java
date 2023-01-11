package openapisdk.models.operations;



public class RunNamespacesRoutesListRequest {
    public RunNamespacesRoutesListPathParams pathParams;
    public RunNamespacesRoutesListRequest withPathParams(RunNamespacesRoutesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RunNamespacesRoutesListQueryParams queryParams;
    public RunNamespacesRoutesListRequest withQueryParams(RunNamespacesRoutesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public RunNamespacesRoutesListSecurity security;
    public RunNamespacesRoutesListRequest withSecurity(RunNamespacesRoutesListSecurity security) {
        this.security = security;
        return this;
    }
}