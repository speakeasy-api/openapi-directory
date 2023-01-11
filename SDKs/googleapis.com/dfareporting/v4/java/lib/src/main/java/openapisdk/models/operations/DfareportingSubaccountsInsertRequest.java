package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingSubaccountsInsertRequest {
    public DfareportingSubaccountsInsertPathParams pathParams;
    public DfareportingSubaccountsInsertRequest withPathParams(DfareportingSubaccountsInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingSubaccountsInsertQueryParams queryParams;
    public DfareportingSubaccountsInsertRequest withQueryParams(DfareportingSubaccountsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Subaccount request;
    public DfareportingSubaccountsInsertRequest withRequest(openapisdk.models.shared.Subaccount request) {
        this.request = request;
        return this;
    }
    public DfareportingSubaccountsInsertSecurity security;
    public DfareportingSubaccountsInsertRequest withSecurity(DfareportingSubaccountsInsertSecurity security) {
        this.security = security;
        return this;
    }
}