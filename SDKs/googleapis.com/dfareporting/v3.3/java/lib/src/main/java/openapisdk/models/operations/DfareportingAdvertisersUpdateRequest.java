package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingAdvertisersUpdateRequest {
    public DfareportingAdvertisersUpdatePathParams pathParams;
    public DfareportingAdvertisersUpdateRequest withPathParams(DfareportingAdvertisersUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingAdvertisersUpdateQueryParams queryParams;
    public DfareportingAdvertisersUpdateRequest withQueryParams(DfareportingAdvertisersUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Advertiser request;
    public DfareportingAdvertisersUpdateRequest withRequest(openapisdk.models.shared.Advertiser request) {
        this.request = request;
        return this;
    }
    public DfareportingAdvertisersUpdateSecurity security;
    public DfareportingAdvertisersUpdateRequest withSecurity(DfareportingAdvertisersUpdateSecurity security) {
        this.security = security;
        return this;
    }
}