package openapisdk.models.operations;



public class VaultMattersSavedQueriesListRequest {
    public VaultMattersSavedQueriesListPathParams pathParams;
    public VaultMattersSavedQueriesListRequest withPathParams(VaultMattersSavedQueriesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public VaultMattersSavedQueriesListQueryParams queryParams;
    public VaultMattersSavedQueriesListRequest withQueryParams(VaultMattersSavedQueriesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public VaultMattersSavedQueriesListSecurity security;
    public VaultMattersSavedQueriesListRequest withSecurity(VaultMattersSavedQueriesListSecurity security) {
        this.security = security;
        return this;
    }
}