package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingPlacementStrategiesInsertRequest {
    public DfareportingPlacementStrategiesInsertPathParams pathParams;
    public DfareportingPlacementStrategiesInsertRequest withPathParams(DfareportingPlacementStrategiesInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingPlacementStrategiesInsertQueryParams queryParams;
    public DfareportingPlacementStrategiesInsertRequest withQueryParams(DfareportingPlacementStrategiesInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PlacementStrategy request;
    public DfareportingPlacementStrategiesInsertRequest withRequest(openapisdk.models.shared.PlacementStrategy request) {
        this.request = request;
        return this;
    }
    public DfareportingPlacementStrategiesInsertSecurity security;
    public DfareportingPlacementStrategiesInsertRequest withSecurity(DfareportingPlacementStrategiesInsertSecurity security) {
        this.security = security;
        return this;
    }
}