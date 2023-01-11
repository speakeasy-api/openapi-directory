package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingSubaccountsPatchRequest {
    public DfareportingSubaccountsPatchPathParams pathParams;
    public DfareportingSubaccountsPatchRequest withPathParams(DfareportingSubaccountsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingSubaccountsPatchQueryParams queryParams;
    public DfareportingSubaccountsPatchRequest withQueryParams(DfareportingSubaccountsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Subaccount request;
    public DfareportingSubaccountsPatchRequest withRequest(openapisdk.models.shared.Subaccount request) {
        this.request = request;
        return this;
    }
    public DfareportingSubaccountsPatchSecurity security;
    public DfareportingSubaccountsPatchRequest withSecurity(DfareportingSubaccountsPatchSecurity security) {
        this.security = security;
        return this;
    }
}