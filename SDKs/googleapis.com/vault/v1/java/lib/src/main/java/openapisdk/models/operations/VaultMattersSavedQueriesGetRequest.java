package openapisdk.models.operations;



public class VaultMattersSavedQueriesGetRequest {
    public VaultMattersSavedQueriesGetPathParams pathParams;
    public VaultMattersSavedQueriesGetRequest withPathParams(VaultMattersSavedQueriesGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public VaultMattersSavedQueriesGetQueryParams queryParams;
    public VaultMattersSavedQueriesGetRequest withQueryParams(VaultMattersSavedQueriesGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public VaultMattersSavedQueriesGetSecurity security;
    public VaultMattersSavedQueriesGetRequest withSecurity(VaultMattersSavedQueriesGetSecurity security) {
        this.security = security;
        return this;
    }
}