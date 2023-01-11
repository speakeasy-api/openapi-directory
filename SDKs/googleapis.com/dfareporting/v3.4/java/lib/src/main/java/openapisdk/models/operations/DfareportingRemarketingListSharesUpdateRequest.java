package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingRemarketingListSharesUpdateRequest {
    public DfareportingRemarketingListSharesUpdatePathParams pathParams;
    public DfareportingRemarketingListSharesUpdateRequest withPathParams(DfareportingRemarketingListSharesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingRemarketingListSharesUpdateQueryParams queryParams;
    public DfareportingRemarketingListSharesUpdateRequest withQueryParams(DfareportingRemarketingListSharesUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RemarketingListShare request;
    public DfareportingRemarketingListSharesUpdateRequest withRequest(openapisdk.models.shared.RemarketingListShare request) {
        this.request = request;
        return this;
    }
    public DfareportingRemarketingListSharesUpdateSecurity security;
    public DfareportingRemarketingListSharesUpdateRequest withSecurity(DfareportingRemarketingListSharesUpdateSecurity security) {
        this.security = security;
        return this;
    }
}