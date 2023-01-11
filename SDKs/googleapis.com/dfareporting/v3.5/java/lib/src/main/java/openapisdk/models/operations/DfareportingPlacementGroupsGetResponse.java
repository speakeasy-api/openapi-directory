package openapisdk.models.operations;



public class DfareportingPlacementGroupsGetResponse {
    public String contentType;
    public DfareportingPlacementGroupsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PlacementGroup placementGroup;
    public DfareportingPlacementGroupsGetResponse withPlacementGroup(openapisdk.models.shared.PlacementGroup placementGroup) {
        this.placementGroup = placementGroup;
        return this;
    }
    public Long statusCode;
    public DfareportingPlacementGroupsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}