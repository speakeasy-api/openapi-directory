package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VaultMattersSavedQueriesCreateRequest {
    public VaultMattersSavedQueriesCreatePathParams pathParams;
    public VaultMattersSavedQueriesCreateRequest withPathParams(VaultMattersSavedQueriesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public VaultMattersSavedQueriesCreateQueryParams queryParams;
    public VaultMattersSavedQueriesCreateRequest withQueryParams(VaultMattersSavedQueriesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SavedQuery request;
    public VaultMattersSavedQueriesCreateRequest withRequest(openapisdk.models.shared.SavedQuery request) {
        this.request = request;
        return this;
    }
    public VaultMattersSavedQueriesCreateSecurity security;
    public VaultMattersSavedQueriesCreateRequest withSecurity(VaultMattersSavedQueriesCreateSecurity security) {
        this.security = security;
        return this;
    }
}