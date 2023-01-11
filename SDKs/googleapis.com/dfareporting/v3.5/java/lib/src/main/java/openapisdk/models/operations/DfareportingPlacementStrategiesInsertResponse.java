package openapisdk.models.operations;



public class DfareportingPlacementStrategiesInsertResponse {
    public String contentType;
    public DfareportingPlacementStrategiesInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PlacementStrategy placementStrategy;
    public DfareportingPlacementStrategiesInsertResponse withPlacementStrategy(openapisdk.models.shared.PlacementStrategy placementStrategy) {
        this.placementStrategy = placementStrategy;
        return this;
    }
    public Long statusCode;
    public DfareportingPlacementStrategiesInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}