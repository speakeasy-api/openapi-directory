package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingAdsInsertRequest {
    public DfareportingAdsInsertPathParams pathParams;
    public DfareportingAdsInsertRequest withPathParams(DfareportingAdsInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingAdsInsertQueryParams queryParams;
    public DfareportingAdsInsertRequest withQueryParams(DfareportingAdsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Ad request;
    public DfareportingAdsInsertRequest withRequest(openapisdk.models.shared.Ad request) {
        this.request = request;
        return this;
    }
    public DfareportingAdsInsertSecurity security;
    public DfareportingAdsInsertRequest withSecurity(DfareportingAdsInsertSecurity security) {
        this.security = security;
        return this;
    }
}