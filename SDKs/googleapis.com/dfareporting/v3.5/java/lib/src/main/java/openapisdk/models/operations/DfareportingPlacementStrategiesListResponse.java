package openapisdk.models.operations;



public class DfareportingPlacementStrategiesListResponse {
    public String contentType;
    public DfareportingPlacementStrategiesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PlacementStrategiesListResponse placementStrategiesListResponse;
    public DfareportingPlacementStrategiesListResponse withPlacementStrategiesListResponse(openapisdk.models.shared.PlacementStrategiesListResponse placementStrategiesListResponse) {
        this.placementStrategiesListResponse = placementStrategiesListResponse;
        return this;
    }
    public Long statusCode;
    public DfareportingPlacementStrategiesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}