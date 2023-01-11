package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingRemarketingListsInsertRequest {
    public DfareportingRemarketingListsInsertPathParams pathParams;
    public DfareportingRemarketingListsInsertRequest withPathParams(DfareportingRemarketingListsInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingRemarketingListsInsertQueryParams queryParams;
    public DfareportingRemarketingListsInsertRequest withQueryParams(DfareportingRemarketingListsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RemarketingList request;
    public DfareportingRemarketingListsInsertRequest withRequest(openapisdk.models.shared.RemarketingList request) {
        this.request = request;
        return this;
    }
    public DfareportingRemarketingListsInsertSecurity security;
    public DfareportingRemarketingListsInsertRequest withSecurity(DfareportingRemarketingListsInsertSecurity security) {
        this.security = security;
        return this;
    }
}