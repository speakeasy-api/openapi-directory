package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VaultMattersHoldsUpdateRequest {
    public VaultMattersHoldsUpdatePathParams pathParams;
    public VaultMattersHoldsUpdateRequest withPathParams(VaultMattersHoldsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public VaultMattersHoldsUpdateQueryParams queryParams;
    public VaultMattersHoldsUpdateRequest withQueryParams(VaultMattersHoldsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Hold request;
    public VaultMattersHoldsUpdateRequest withRequest(openapisdk.models.shared.Hold request) {
        this.request = request;
        return this;
    }
    public VaultMattersHoldsUpdateSecurity security;
    public VaultMattersHoldsUpdateRequest withSecurity(VaultMattersHoldsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}