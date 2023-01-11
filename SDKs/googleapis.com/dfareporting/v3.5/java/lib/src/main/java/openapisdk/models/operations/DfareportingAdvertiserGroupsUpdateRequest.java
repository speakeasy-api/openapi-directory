package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingAdvertiserGroupsUpdateRequest {
    public DfareportingAdvertiserGroupsUpdatePathParams pathParams;
    public DfareportingAdvertiserGroupsUpdateRequest withPathParams(DfareportingAdvertiserGroupsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingAdvertiserGroupsUpdateQueryParams queryParams;
    public DfareportingAdvertiserGroupsUpdateRequest withQueryParams(DfareportingAdvertiserGroupsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AdvertiserGroup request;
    public DfareportingAdvertiserGroupsUpdateRequest withRequest(openapisdk.models.shared.AdvertiserGroup request) {
        this.request = request;
        return this;
    }
    public DfareportingAdvertiserGroupsUpdateSecurity security;
    public DfareportingAdvertiserGroupsUpdateRequest withSecurity(DfareportingAdvertiserGroupsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}