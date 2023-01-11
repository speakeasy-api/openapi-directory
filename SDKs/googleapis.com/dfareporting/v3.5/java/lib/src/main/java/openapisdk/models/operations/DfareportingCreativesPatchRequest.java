package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingCreativesPatchRequest {
    public DfareportingCreativesPatchPathParams pathParams;
    public DfareportingCreativesPatchRequest withPathParams(DfareportingCreativesPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingCreativesPatchQueryParams queryParams;
    public DfareportingCreativesPatchRequest withQueryParams(DfareportingCreativesPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Creative request;
    public DfareportingCreativesPatchRequest withRequest(openapisdk.models.shared.Creative request) {
        this.request = request;
        return this;
    }
    public DfareportingCreativesPatchSecurity security;
    public DfareportingCreativesPatchRequest withSecurity(DfareportingCreativesPatchSecurity security) {
        this.security = security;
        return this;
    }
}