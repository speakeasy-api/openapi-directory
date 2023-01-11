package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VaultMattersReopenRequest {
    public VaultMattersReopenPathParams pathParams;
    public VaultMattersReopenRequest withPathParams(VaultMattersReopenPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public VaultMattersReopenQueryParams queryParams;
    public VaultMattersReopenRequest withQueryParams(VaultMattersReopenQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public VaultMattersReopenRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public VaultMattersReopenSecurity security;
    public VaultMattersReopenRequest withSecurity(VaultMattersReopenSecurity security) {
        this.security = security;
        return this;
    }
}