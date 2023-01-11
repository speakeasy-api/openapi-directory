package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingFloodlightActivityGroupsPatchRequest {
    public DfareportingFloodlightActivityGroupsPatchPathParams pathParams;
    public DfareportingFloodlightActivityGroupsPatchRequest withPathParams(DfareportingFloodlightActivityGroupsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingFloodlightActivityGroupsPatchQueryParams queryParams;
    public DfareportingFloodlightActivityGroupsPatchRequest withQueryParams(DfareportingFloodlightActivityGroupsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FloodlightActivityGroup request;
    public DfareportingFloodlightActivityGroupsPatchRequest withRequest(openapisdk.models.shared.FloodlightActivityGroup request) {
        this.request = request;
        return this;
    }
    public DfareportingFloodlightActivityGroupsPatchSecurity security;
    public DfareportingFloodlightActivityGroupsPatchRequest withSecurity(DfareportingFloodlightActivityGroupsPatchSecurity security) {
        this.security = security;
        return this;
    }
}