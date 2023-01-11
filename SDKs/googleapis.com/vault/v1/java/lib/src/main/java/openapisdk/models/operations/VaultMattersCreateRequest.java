package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VaultMattersCreateRequest {
    public VaultMattersCreateQueryParams queryParams;
    public VaultMattersCreateRequest withQueryParams(VaultMattersCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Matter request;
    public VaultMattersCreateRequest withRequest(openapisdk.models.shared.Matter request) {
        this.request = request;
        return this;
    }
    public VaultMattersCreateSecurity security;
    public VaultMattersCreateRequest withSecurity(VaultMattersCreateSecurity security) {
        this.security = security;
        return this;
    }
}