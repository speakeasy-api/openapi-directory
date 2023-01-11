package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VaultMattersHoldsAddHeldAccountsRequest {
    public VaultMattersHoldsAddHeldAccountsPathParams pathParams;
    public VaultMattersHoldsAddHeldAccountsRequest withPathParams(VaultMattersHoldsAddHeldAccountsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public VaultMattersHoldsAddHeldAccountsQueryParams queryParams;
    public VaultMattersHoldsAddHeldAccountsRequest withQueryParams(VaultMattersHoldsAddHeldAccountsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AddHeldAccountsRequest request;
    public VaultMattersHoldsAddHeldAccountsRequest withRequest(openapisdk.models.shared.AddHeldAccountsRequest request) {
        this.request = request;
        return this;
    }
    public VaultMattersHoldsAddHeldAccountsSecurity security;
    public VaultMattersHoldsAddHeldAccountsRequest withSecurity(VaultMattersHoldsAddHeldAccountsSecurity security) {
        this.security = security;
        return this;
    }
}