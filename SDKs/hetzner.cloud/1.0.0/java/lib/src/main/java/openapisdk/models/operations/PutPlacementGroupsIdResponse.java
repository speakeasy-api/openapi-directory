package openapisdk.models.operations;



public class PutPlacementGroupsIdResponse {
    public String contentType;
    public PutPlacementGroupsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public PutPlacementGroupsIdPlacementGroupResponse placementGroupResponse;
    public PutPlacementGroupsIdResponse withPlacementGroupResponse(PutPlacementGroupsIdPlacementGroupResponse placementGroupResponse) {
        this.placementGroupResponse = placementGroupResponse;
        return this;
    }
    public Long statusCode;
    public PutPlacementGroupsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}