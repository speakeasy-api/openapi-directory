package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingCreativeGroupsPatchRequest {
    public DfareportingCreativeGroupsPatchPathParams pathParams;
    public DfareportingCreativeGroupsPatchRequest withPathParams(DfareportingCreativeGroupsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingCreativeGroupsPatchQueryParams queryParams;
    public DfareportingCreativeGroupsPatchRequest withQueryParams(DfareportingCreativeGroupsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreativeGroup request;
    public DfareportingCreativeGroupsPatchRequest withRequest(openapisdk.models.shared.CreativeGroup request) {
        this.request = request;
        return this;
    }
    public DfareportingCreativeGroupsPatchSecurity security;
    public DfareportingCreativeGroupsPatchRequest withSecurity(DfareportingCreativeGroupsPatchSecurity security) {
        this.security = security;
        return this;
    }
}