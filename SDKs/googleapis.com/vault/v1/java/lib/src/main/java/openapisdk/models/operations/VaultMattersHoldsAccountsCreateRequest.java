package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VaultMattersHoldsAccountsCreateRequest {
    public VaultMattersHoldsAccountsCreatePathParams pathParams;
    public VaultMattersHoldsAccountsCreateRequest withPathParams(VaultMattersHoldsAccountsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public VaultMattersHoldsAccountsCreateQueryParams queryParams;
    public VaultMattersHoldsAccountsCreateRequest withQueryParams(VaultMattersHoldsAccountsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.HeldAccount request;
    public VaultMattersHoldsAccountsCreateRequest withRequest(openapisdk.models.shared.HeldAccount request) {
        this.request = request;
        return this;
    }
    public VaultMattersHoldsAccountsCreateSecurity security;
    public VaultMattersHoldsAccountsCreateRequest withSecurity(VaultMattersHoldsAccountsCreateSecurity security) {
        this.security = security;
        return this;
    }
}