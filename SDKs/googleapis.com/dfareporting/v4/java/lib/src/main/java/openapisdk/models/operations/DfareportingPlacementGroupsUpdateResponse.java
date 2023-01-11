package openapisdk.models.operations;



public class DfareportingPlacementGroupsUpdateResponse {
    public String contentType;
    public DfareportingPlacementGroupsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PlacementGroup placementGroup;
    public DfareportingPlacementGroupsUpdateResponse withPlacementGroup(openapisdk.models.shared.PlacementGroup placementGroup) {
        this.placementGroup = placementGroup;
        return this;
    }
    public Long statusCode;
    public DfareportingPlacementGroupsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}