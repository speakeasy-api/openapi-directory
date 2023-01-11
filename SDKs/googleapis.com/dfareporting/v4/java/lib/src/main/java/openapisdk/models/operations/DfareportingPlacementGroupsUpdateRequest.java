package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingPlacementGroupsUpdateRequest {
    public DfareportingPlacementGroupsUpdatePathParams pathParams;
    public DfareportingPlacementGroupsUpdateRequest withPathParams(DfareportingPlacementGroupsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingPlacementGroupsUpdateQueryParams queryParams;
    public DfareportingPlacementGroupsUpdateRequest withQueryParams(DfareportingPlacementGroupsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PlacementGroup request;
    public DfareportingPlacementGroupsUpdateRequest withRequest(openapisdk.models.shared.PlacementGroup request) {
        this.request = request;
        return this;
    }
    public DfareportingPlacementGroupsUpdateSecurity security;
    public DfareportingPlacementGroupsUpdateRequest withSecurity(DfareportingPlacementGroupsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}