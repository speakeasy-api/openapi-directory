package openapisdk.models.operations;



public class GetPlacementGroupsIdResponse {
    public String contentType;
    public GetPlacementGroupsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public GetPlacementGroupsIdPlacementGroupResponse placementGroupResponse;
    public GetPlacementGroupsIdResponse withPlacementGroupResponse(GetPlacementGroupsIdPlacementGroupResponse placementGroupResponse) {
        this.placementGroupResponse = placementGroupResponse;
        return this;
    }
    public Long statusCode;
    public GetPlacementGroupsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}