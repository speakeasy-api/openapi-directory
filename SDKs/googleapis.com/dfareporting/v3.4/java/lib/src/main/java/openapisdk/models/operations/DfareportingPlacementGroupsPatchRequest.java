package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingPlacementGroupsPatchRequest {
    public DfareportingPlacementGroupsPatchPathParams pathParams;
    public DfareportingPlacementGroupsPatchRequest withPathParams(DfareportingPlacementGroupsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingPlacementGroupsPatchQueryParams queryParams;
    public DfareportingPlacementGroupsPatchRequest withQueryParams(DfareportingPlacementGroupsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PlacementGroup request;
    public DfareportingPlacementGroupsPatchRequest withRequest(openapisdk.models.shared.PlacementGroup request) {
        this.request = request;
        return this;
    }
    public DfareportingPlacementGroupsPatchSecurity security;
    public DfareportingPlacementGroupsPatchRequest withSecurity(DfareportingPlacementGroupsPatchSecurity security) {
        this.security = security;
        return this;
    }
}