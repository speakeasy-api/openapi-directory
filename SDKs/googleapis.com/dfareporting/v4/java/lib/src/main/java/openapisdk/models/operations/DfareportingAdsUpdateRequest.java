package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingAdsUpdateRequest {
    public DfareportingAdsUpdatePathParams pathParams;
    public DfareportingAdsUpdateRequest withPathParams(DfareportingAdsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingAdsUpdateQueryParams queryParams;
    public DfareportingAdsUpdateRequest withQueryParams(DfareportingAdsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Ad request;
    public DfareportingAdsUpdateRequest withRequest(openapisdk.models.shared.Ad request) {
        this.request = request;
        return this;
    }
    public DfareportingAdsUpdateSecurity security;
    public DfareportingAdsUpdateRequest withSecurity(DfareportingAdsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}