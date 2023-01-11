package openapisdk.models.operations;



public class RunNamespacesRevisionsListRequest {
    public RunNamespacesRevisionsListPathParams pathParams;
    public RunNamespacesRevisionsListRequest withPathParams(RunNamespacesRevisionsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RunNamespacesRevisionsListQueryParams queryParams;
    public RunNamespacesRevisionsListRequest withQueryParams(RunNamespacesRevisionsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public RunNamespacesRevisionsListSecurity security;
    public RunNamespacesRevisionsListRequest withSecurity(RunNamespacesRevisionsListSecurity security) {
        this.security = security;
        return this;
    }
}