package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingAdvertiserLandingPagesPatchRequest {
    public DfareportingAdvertiserLandingPagesPatchPathParams pathParams;
    public DfareportingAdvertiserLandingPagesPatchRequest withPathParams(DfareportingAdvertiserLandingPagesPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingAdvertiserLandingPagesPatchQueryParams queryParams;
    public DfareportingAdvertiserLandingPagesPatchRequest withQueryParams(DfareportingAdvertiserLandingPagesPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LandingPage request;
    public DfareportingAdvertiserLandingPagesPatchRequest withRequest(openapisdk.models.shared.LandingPage request) {
        this.request = request;
        return this;
    }
    public DfareportingAdvertiserLandingPagesPatchSecurity security;
    public DfareportingAdvertiserLandingPagesPatchRequest withSecurity(DfareportingAdvertiserLandingPagesPatchSecurity security) {
        this.security = security;
        return this;
    }
}