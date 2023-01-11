package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingFloodlightActivityGroupsUpdateRequest {
    public DfareportingFloodlightActivityGroupsUpdatePathParams pathParams;
    public DfareportingFloodlightActivityGroupsUpdateRequest withPathParams(DfareportingFloodlightActivityGroupsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingFloodlightActivityGroupsUpdateQueryParams queryParams;
    public DfareportingFloodlightActivityGroupsUpdateRequest withQueryParams(DfareportingFloodlightActivityGroupsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FloodlightActivityGroup request;
    public DfareportingFloodlightActivityGroupsUpdateRequest withRequest(openapisdk.models.shared.FloodlightActivityGroup request) {
        this.request = request;
        return this;
    }
    public DfareportingFloodlightActivityGroupsUpdateSecurity security;
    public DfareportingFloodlightActivityGroupsUpdateRequest withSecurity(DfareportingFloodlightActivityGroupsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}