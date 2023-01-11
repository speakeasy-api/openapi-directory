package openapisdk.models.operations;



public class DfareportingPlacementStrategiesPatchResponse {
    public String contentType;
    public DfareportingPlacementStrategiesPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PlacementStrategy placementStrategy;
    public DfareportingPlacementStrategiesPatchResponse withPlacementStrategy(openapisdk.models.shared.PlacementStrategy placementStrategy) {
        this.placementStrategy = placementStrategy;
        return this;
    }
    public Long statusCode;
    public DfareportingPlacementStrategiesPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}