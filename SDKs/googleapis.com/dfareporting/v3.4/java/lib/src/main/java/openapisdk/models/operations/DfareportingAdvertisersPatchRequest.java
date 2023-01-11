package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingAdvertisersPatchRequest {
    public DfareportingAdvertisersPatchPathParams pathParams;
    public DfareportingAdvertisersPatchRequest withPathParams(DfareportingAdvertisersPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingAdvertisersPatchQueryParams queryParams;
    public DfareportingAdvertisersPatchRequest withQueryParams(DfareportingAdvertisersPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Advertiser request;
    public DfareportingAdvertisersPatchRequest withRequest(openapisdk.models.shared.Advertiser request) {
        this.request = request;
        return this;
    }
    public DfareportingAdvertisersPatchSecurity security;
    public DfareportingAdvertisersPatchRequest withSecurity(DfareportingAdvertisersPatchSecurity security) {
        this.security = security;
        return this;
    }
}