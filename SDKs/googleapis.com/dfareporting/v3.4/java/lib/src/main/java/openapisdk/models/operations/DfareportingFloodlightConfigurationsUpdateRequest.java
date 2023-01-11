package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingFloodlightConfigurationsUpdateRequest {
    public DfareportingFloodlightConfigurationsUpdatePathParams pathParams;
    public DfareportingFloodlightConfigurationsUpdateRequest withPathParams(DfareportingFloodlightConfigurationsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingFloodlightConfigurationsUpdateQueryParams queryParams;
    public DfareportingFloodlightConfigurationsUpdateRequest withQueryParams(DfareportingFloodlightConfigurationsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FloodlightConfiguration request;
    public DfareportingFloodlightConfigurationsUpdateRequest withRequest(openapisdk.models.shared.FloodlightConfiguration request) {
        this.request = request;
        return this;
    }
    public DfareportingFloodlightConfigurationsUpdateSecurity security;
    public DfareportingFloodlightConfigurationsUpdateRequest withSecurity(DfareportingFloodlightConfigurationsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}