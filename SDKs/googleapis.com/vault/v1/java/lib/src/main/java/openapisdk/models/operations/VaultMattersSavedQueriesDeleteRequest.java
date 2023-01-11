package openapisdk.models.operations;



public class VaultMattersSavedQueriesDeleteRequest {
    public VaultMattersSavedQueriesDeletePathParams pathParams;
    public VaultMattersSavedQueriesDeleteRequest withPathParams(VaultMattersSavedQueriesDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public VaultMattersSavedQueriesDeleteQueryParams queryParams;
    public VaultMattersSavedQueriesDeleteRequest withQueryParams(VaultMattersSavedQueriesDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public VaultMattersSavedQueriesDeleteSecurity security;
    public VaultMattersSavedQueriesDeleteRequest withSecurity(VaultMattersSavedQueriesDeleteSecurity security) {
        this.security = security;
        return this;
    }
}