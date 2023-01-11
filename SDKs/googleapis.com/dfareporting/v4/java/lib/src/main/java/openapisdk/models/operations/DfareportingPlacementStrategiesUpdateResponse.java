package openapisdk.models.operations;



public class DfareportingPlacementStrategiesUpdateResponse {
    public String contentType;
    public DfareportingPlacementStrategiesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PlacementStrategy placementStrategy;
    public DfareportingPlacementStrategiesUpdateResponse withPlacementStrategy(openapisdk.models.shared.PlacementStrategy placementStrategy) {
        this.placementStrategy = placementStrategy;
        return this;
    }
    public Long statusCode;
    public DfareportingPlacementStrategiesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}