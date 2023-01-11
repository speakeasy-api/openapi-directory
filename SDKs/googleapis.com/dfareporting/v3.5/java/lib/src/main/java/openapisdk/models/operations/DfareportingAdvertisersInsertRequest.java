package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingAdvertisersInsertRequest {
    public DfareportingAdvertisersInsertPathParams pathParams;
    public DfareportingAdvertisersInsertRequest withPathParams(DfareportingAdvertisersInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingAdvertisersInsertQueryParams queryParams;
    public DfareportingAdvertisersInsertRequest withQueryParams(DfareportingAdvertisersInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Advertiser request;
    public DfareportingAdvertisersInsertRequest withRequest(openapisdk.models.shared.Advertiser request) {
        this.request = request;
        return this;
    }
    public DfareportingAdvertisersInsertSecurity security;
    public DfareportingAdvertisersInsertRequest withSecurity(DfareportingAdvertisersInsertSecurity security) {
        this.security = security;
        return this;
    }
}