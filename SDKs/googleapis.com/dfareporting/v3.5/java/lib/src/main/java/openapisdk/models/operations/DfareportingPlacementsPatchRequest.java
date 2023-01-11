package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingPlacementsPatchRequest {
    public DfareportingPlacementsPatchPathParams pathParams;
    public DfareportingPlacementsPatchRequest withPathParams(DfareportingPlacementsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingPlacementsPatchQueryParams queryParams;
    public DfareportingPlacementsPatchRequest withQueryParams(DfareportingPlacementsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Placement request;
    public DfareportingPlacementsPatchRequest withRequest(openapisdk.models.shared.Placement request) {
        this.request = request;
        return this;
    }
    public DfareportingPlacementsPatchSecurity security;
    public DfareportingPlacementsPatchRequest withSecurity(DfareportingPlacementsPatchSecurity security) {
        this.security = security;
        return this;
    }
}