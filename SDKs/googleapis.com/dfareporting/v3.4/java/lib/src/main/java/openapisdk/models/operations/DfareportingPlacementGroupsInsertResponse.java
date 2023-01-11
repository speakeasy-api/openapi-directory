package openapisdk.models.operations;



public class DfareportingPlacementGroupsInsertResponse {
    public String contentType;
    public DfareportingPlacementGroupsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PlacementGroup placementGroup;
    public DfareportingPlacementGroupsInsertResponse withPlacementGroup(openapisdk.models.shared.PlacementGroup placementGroup) {
        this.placementGroup = placementGroup;
        return this;
    }
    public Long statusCode;
    public DfareportingPlacementGroupsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}