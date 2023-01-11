package openapisdk.models.operations;



public class DfareportingPlacementGroupsListResponse {
    public String contentType;
    public DfareportingPlacementGroupsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PlacementGroupsListResponse placementGroupsListResponse;
    public DfareportingPlacementGroupsListResponse withPlacementGroupsListResponse(openapisdk.models.shared.PlacementGroupsListResponse placementGroupsListResponse) {
        this.placementGroupsListResponse = placementGroupsListResponse;
        return this;
    }
    public Long statusCode;
    public DfareportingPlacementGroupsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}