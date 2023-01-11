package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingPlacementStrategiesPatchRequest {
    public DfareportingPlacementStrategiesPatchPathParams pathParams;
    public DfareportingPlacementStrategiesPatchRequest withPathParams(DfareportingPlacementStrategiesPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingPlacementStrategiesPatchQueryParams queryParams;
    public DfareportingPlacementStrategiesPatchRequest withQueryParams(DfareportingPlacementStrategiesPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PlacementStrategy request;
    public DfareportingPlacementStrategiesPatchRequest withRequest(openapisdk.models.shared.PlacementStrategy request) {
        this.request = request;
        return this;
    }
    public DfareportingPlacementStrategiesPatchSecurity security;
    public DfareportingPlacementStrategiesPatchRequest withSecurity(DfareportingPlacementStrategiesPatchSecurity security) {
        this.security = security;
        return this;
    }
}