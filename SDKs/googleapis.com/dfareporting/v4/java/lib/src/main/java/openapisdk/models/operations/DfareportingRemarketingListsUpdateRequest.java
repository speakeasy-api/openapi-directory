package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingRemarketingListsUpdateRequest {
    public DfareportingRemarketingListsUpdatePathParams pathParams;
    public DfareportingRemarketingListsUpdateRequest withPathParams(DfareportingRemarketingListsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingRemarketingListsUpdateQueryParams queryParams;
    public DfareportingRemarketingListsUpdateRequest withQueryParams(DfareportingRemarketingListsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RemarketingList request;
    public DfareportingRemarketingListsUpdateRequest withRequest(openapisdk.models.shared.RemarketingList request) {
        this.request = request;
        return this;
    }
    public DfareportingRemarketingListsUpdateSecurity security;
    public DfareportingRemarketingListsUpdateRequest withSecurity(DfareportingRemarketingListsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}