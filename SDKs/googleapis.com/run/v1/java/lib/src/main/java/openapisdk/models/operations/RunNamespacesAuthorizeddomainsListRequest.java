package openapisdk.models.operations;



public class RunNamespacesAuthorizeddomainsListRequest {
    public RunNamespacesAuthorizeddomainsListPathParams pathParams;
    public RunNamespacesAuthorizeddomainsListRequest withPathParams(RunNamespacesAuthorizeddomainsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RunNamespacesAuthorizeddomainsListQueryParams queryParams;
    public RunNamespacesAuthorizeddomainsListRequest withQueryParams(RunNamespacesAuthorizeddomainsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public RunNamespacesAuthorizeddomainsListSecurity security;
    public RunNamespacesAuthorizeddomainsListRequest withSecurity(RunNamespacesAuthorizeddomainsListSecurity security) {
        this.security = security;
        return this;
    }
}