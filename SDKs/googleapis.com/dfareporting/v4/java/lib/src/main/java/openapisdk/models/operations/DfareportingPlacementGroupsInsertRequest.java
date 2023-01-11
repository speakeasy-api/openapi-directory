package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingPlacementGroupsInsertRequest {
    public DfareportingPlacementGroupsInsertPathParams pathParams;
    public DfareportingPlacementGroupsInsertRequest withPathParams(DfareportingPlacementGroupsInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingPlacementGroupsInsertQueryParams queryParams;
    public DfareportingPlacementGroupsInsertRequest withQueryParams(DfareportingPlacementGroupsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PlacementGroup request;
    public DfareportingPlacementGroupsInsertRequest withRequest(openapisdk.models.shared.PlacementGroup request) {
        this.request = request;
        return this;
    }
    public DfareportingPlacementGroupsInsertSecurity security;
    public DfareportingPlacementGroupsInsertRequest withSecurity(DfareportingPlacementGroupsInsertSecurity security) {
        this.security = security;
        return this;
    }
}