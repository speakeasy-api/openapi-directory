package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingFloodlightConfigurationsPatchRequest {
    public DfareportingFloodlightConfigurationsPatchPathParams pathParams;
    public DfareportingFloodlightConfigurationsPatchRequest withPathParams(DfareportingFloodlightConfigurationsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingFloodlightConfigurationsPatchQueryParams queryParams;
    public DfareportingFloodlightConfigurationsPatchRequest withQueryParams(DfareportingFloodlightConfigurationsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FloodlightConfiguration request;
    public DfareportingFloodlightConfigurationsPatchRequest withRequest(openapisdk.models.shared.FloodlightConfiguration request) {
        this.request = request;
        return this;
    }
    public DfareportingFloodlightConfigurationsPatchSecurity security;
    public DfareportingFloodlightConfigurationsPatchRequest withSecurity(DfareportingFloodlightConfigurationsPatchSecurity security) {
        this.security = security;
        return this;
    }
}