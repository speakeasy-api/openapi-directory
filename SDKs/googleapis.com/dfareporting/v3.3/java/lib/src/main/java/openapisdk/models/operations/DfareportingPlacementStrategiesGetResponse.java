package openapisdk.models.operations;



public class DfareportingPlacementStrategiesGetResponse {
    public String contentType;
    public DfareportingPlacementStrategiesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PlacementStrategy placementStrategy;
    public DfareportingPlacementStrategiesGetResponse withPlacementStrategy(openapisdk.models.shared.PlacementStrategy placementStrategy) {
        this.placementStrategy = placementStrategy;
        return this;
    }
    public Long statusCode;
    public DfareportingPlacementStrategiesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}