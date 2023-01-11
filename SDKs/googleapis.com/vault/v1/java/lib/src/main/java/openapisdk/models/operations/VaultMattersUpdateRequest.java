package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VaultMattersUpdateRequest {
    public VaultMattersUpdatePathParams pathParams;
    public VaultMattersUpdateRequest withPathParams(VaultMattersUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public VaultMattersUpdateQueryParams queryParams;
    public VaultMattersUpdateRequest withQueryParams(VaultMattersUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Matter request;
    public VaultMattersUpdateRequest withRequest(openapisdk.models.shared.Matter request) {
        this.request = request;
        return this;
    }
    public VaultMattersUpdateSecurity security;
    public VaultMattersUpdateRequest withSecurity(VaultMattersUpdateSecurity security) {
        this.security = security;
        return this;
    }
}