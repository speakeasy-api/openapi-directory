package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingBillingProfilesUpdateRequest {
    public DfareportingBillingProfilesUpdatePathParams pathParams;
    public DfareportingBillingProfilesUpdateRequest withPathParams(DfareportingBillingProfilesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingBillingProfilesUpdateQueryParams queryParams;
    public DfareportingBillingProfilesUpdateRequest withQueryParams(DfareportingBillingProfilesUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BillingProfile request;
    public DfareportingBillingProfilesUpdateRequest withRequest(openapisdk.models.shared.BillingProfile request) {
        this.request = request;
        return this;
    }
    public DfareportingBillingProfilesUpdateSecurity security;
    public DfareportingBillingProfilesUpdateRequest withSecurity(DfareportingBillingProfilesUpdateSecurity security) {
        this.security = security;
        return this;
    }
}