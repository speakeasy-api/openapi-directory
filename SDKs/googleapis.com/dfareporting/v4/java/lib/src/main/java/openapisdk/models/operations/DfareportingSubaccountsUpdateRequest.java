package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingSubaccountsUpdateRequest {
    public DfareportingSubaccountsUpdatePathParams pathParams;
    public DfareportingSubaccountsUpdateRequest withPathParams(DfareportingSubaccountsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingSubaccountsUpdateQueryParams queryParams;
    public DfareportingSubaccountsUpdateRequest withQueryParams(DfareportingSubaccountsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Subaccount request;
    public DfareportingSubaccountsUpdateRequest withRequest(openapisdk.models.shared.Subaccount request) {
        this.request = request;
        return this;
    }
    public DfareportingSubaccountsUpdateSecurity security;
    public DfareportingSubaccountsUpdateRequest withSecurity(DfareportingSubaccountsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}