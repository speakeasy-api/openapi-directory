package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingAdvertiserGroupsPatchRequest {
    public DfareportingAdvertiserGroupsPatchPathParams pathParams;
    public DfareportingAdvertiserGroupsPatchRequest withPathParams(DfareportingAdvertiserGroupsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingAdvertiserGroupsPatchQueryParams queryParams;
    public DfareportingAdvertiserGroupsPatchRequest withQueryParams(DfareportingAdvertiserGroupsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AdvertiserGroup request;
    public DfareportingAdvertiserGroupsPatchRequest withRequest(openapisdk.models.shared.AdvertiserGroup request) {
        this.request = request;
        return this;
    }
    public DfareportingAdvertiserGroupsPatchSecurity security;
    public DfareportingAdvertiserGroupsPatchRequest withSecurity(DfareportingAdvertiserGroupsPatchSecurity security) {
        this.security = security;
        return this;
    }
}