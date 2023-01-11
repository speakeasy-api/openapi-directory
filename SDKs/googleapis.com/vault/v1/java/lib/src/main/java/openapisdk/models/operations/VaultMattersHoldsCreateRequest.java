package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VaultMattersHoldsCreateRequest {
    public VaultMattersHoldsCreatePathParams pathParams;
    public VaultMattersHoldsCreateRequest withPathParams(VaultMattersHoldsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public VaultMattersHoldsCreateQueryParams queryParams;
    public VaultMattersHoldsCreateRequest withQueryParams(VaultMattersHoldsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Hold request;
    public VaultMattersHoldsCreateRequest withRequest(openapisdk.models.shared.Hold request) {
        this.request = request;
        return this;
    }
    public VaultMattersHoldsCreateSecurity security;
    public VaultMattersHoldsCreateRequest withSecurity(VaultMattersHoldsCreateSecurity security) {
        this.security = security;
        return this;
    }
}