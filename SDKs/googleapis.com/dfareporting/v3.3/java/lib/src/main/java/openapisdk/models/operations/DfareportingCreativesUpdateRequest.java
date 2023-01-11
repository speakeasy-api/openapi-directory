package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingCreativesUpdateRequest {
    public DfareportingCreativesUpdatePathParams pathParams;
    public DfareportingCreativesUpdateRequest withPathParams(DfareportingCreativesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingCreativesUpdateQueryParams queryParams;
    public DfareportingCreativesUpdateRequest withQueryParams(DfareportingCreativesUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Creative request;
    public DfareportingCreativesUpdateRequest withRequest(openapisdk.models.shared.Creative request) {
        this.request = request;
        return this;
    }
    public DfareportingCreativesUpdateSecurity security;
    public DfareportingCreativesUpdateRequest withSecurity(DfareportingCreativesUpdateSecurity security) {
        this.security = security;
        return this;
    }
}