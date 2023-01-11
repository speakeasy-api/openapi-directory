package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingPlacementStrategiesUpdateRequest {
    public DfareportingPlacementStrategiesUpdatePathParams pathParams;
    public DfareportingPlacementStrategiesUpdateRequest withPathParams(DfareportingPlacementStrategiesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingPlacementStrategiesUpdateQueryParams queryParams;
    public DfareportingPlacementStrategiesUpdateRequest withQueryParams(DfareportingPlacementStrategiesUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PlacementStrategy request;
    public DfareportingPlacementStrategiesUpdateRequest withRequest(openapisdk.models.shared.PlacementStrategy request) {
        this.request = request;
        return this;
    }
    public DfareportingPlacementStrategiesUpdateSecurity security;
    public DfareportingPlacementStrategiesUpdateRequest withSecurity(DfareportingPlacementStrategiesUpdateSecurity security) {
        this.security = security;
        return this;
    }
}