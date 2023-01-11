package openapisdk.models.operations;



public class DfareportingPlacementStrategiesListRequest {
    public DfareportingPlacementStrategiesListPathParams pathParams;
    public DfareportingPlacementStrategiesListRequest withPathParams(DfareportingPlacementStrategiesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingPlacementStrategiesListQueryParams queryParams;
    public DfareportingPlacementStrategiesListRequest withQueryParams(DfareportingPlacementStrategiesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DfareportingPlacementStrategiesListSecurity security;
    public DfareportingPlacementStrategiesListRequest withSecurity(DfareportingPlacementStrategiesListSecurity security) {
        this.security = security;
        return this;
    }
}