package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingAdvertiserLandingPagesInsertRequest {
    public DfareportingAdvertiserLandingPagesInsertPathParams pathParams;
    public DfareportingAdvertiserLandingPagesInsertRequest withPathParams(DfareportingAdvertiserLandingPagesInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingAdvertiserLandingPagesInsertQueryParams queryParams;
    public DfareportingAdvertiserLandingPagesInsertRequest withQueryParams(DfareportingAdvertiserLandingPagesInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LandingPage request;
    public DfareportingAdvertiserLandingPagesInsertRequest withRequest(openapisdk.models.shared.LandingPage request) {
        this.request = request;
        return this;
    }
    public DfareportingAdvertiserLandingPagesInsertSecurity security;
    public DfareportingAdvertiserLandingPagesInsertRequest withSecurity(DfareportingAdvertiserLandingPagesInsertSecurity security) {
        this.security = security;
        return this;
    }
}