package openapisdk.models.operations;



public class GetPlacementGroupsResponse {
    public String contentType;
    public GetPlacementGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public GetPlacementGroupsPlacementGroupsResponse placementGroupsResponse;
    public GetPlacementGroupsResponse withPlacementGroupsResponse(GetPlacementGroupsPlacementGroupsResponse placementGroupsResponse) {
        this.placementGroupsResponse = placementGroupsResponse;
        return this;
    }
    public Long statusCode;
    public GetPlacementGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}