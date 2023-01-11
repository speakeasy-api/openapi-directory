package openapisdk.models.operations;



public class DfareportingPlacementGroupsPatchResponse {
    public String contentType;
    public DfareportingPlacementGroupsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PlacementGroup placementGroup;
    public DfareportingPlacementGroupsPatchResponse withPlacementGroup(openapisdk.models.shared.PlacementGroup placementGroup) {
        this.placementGroup = placementGroup;
        return this;
    }
    public Long statusCode;
    public DfareportingPlacementGroupsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}