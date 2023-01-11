package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingRemarketingListSharesPatchRequest {
    public DfareportingRemarketingListSharesPatchPathParams pathParams;
    public DfareportingRemarketingListSharesPatchRequest withPathParams(DfareportingRemarketingListSharesPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingRemarketingListSharesPatchQueryParams queryParams;
    public DfareportingRemarketingListSharesPatchRequest withQueryParams(DfareportingRemarketingListSharesPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RemarketingListShare request;
    public DfareportingRemarketingListSharesPatchRequest withRequest(openapisdk.models.shared.RemarketingListShare request) {
        this.request = request;
        return this;
    }
    public DfareportingRemarketingListSharesPatchSecurity security;
    public DfareportingRemarketingListSharesPatchRequest withSecurity(DfareportingRemarketingListSharesPatchSecurity security) {
        this.security = security;
        return this;
    }
}