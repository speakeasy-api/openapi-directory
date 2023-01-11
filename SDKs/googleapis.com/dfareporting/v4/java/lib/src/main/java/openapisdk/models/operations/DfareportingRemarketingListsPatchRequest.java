package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingRemarketingListsPatchRequest {
    public DfareportingRemarketingListsPatchPathParams pathParams;
    public DfareportingRemarketingListsPatchRequest withPathParams(DfareportingRemarketingListsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingRemarketingListsPatchQueryParams queryParams;
    public DfareportingRemarketingListsPatchRequest withQueryParams(DfareportingRemarketingListsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RemarketingList request;
    public DfareportingRemarketingListsPatchRequest withRequest(openapisdk.models.shared.RemarketingList request) {
        this.request = request;
        return this;
    }
    public DfareportingRemarketingListsPatchSecurity security;
    public DfareportingRemarketingListsPatchRequest withSecurity(DfareportingRemarketingListsPatchSecurity security) {
        this.security = security;
        return this;
    }
}