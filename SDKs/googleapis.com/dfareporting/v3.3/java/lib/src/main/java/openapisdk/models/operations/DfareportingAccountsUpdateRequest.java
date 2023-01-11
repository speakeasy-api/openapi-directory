package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingAccountsUpdateRequest {
    public DfareportingAccountsUpdatePathParams pathParams;
    public DfareportingAccountsUpdateRequest withPathParams(DfareportingAccountsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingAccountsUpdateQueryParams queryParams;
    public DfareportingAccountsUpdateRequest withQueryParams(DfareportingAccountsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Account request;
    public DfareportingAccountsUpdateRequest withRequest(openapisdk.models.shared.Account request) {
        this.request = request;
        return this;
    }
    public DfareportingAccountsUpdateSecurity security;
    public DfareportingAccountsUpdateRequest withSecurity(DfareportingAccountsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}