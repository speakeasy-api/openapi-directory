package openapisdk.models.operations;



public class PostPlacementGroupsResponse {
    public String contentType;
    public PostPlacementGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public PostPlacementGroupsCreatePlacementGroupResponse createPlacementGroupResponse;
    public PostPlacementGroupsResponse withCreatePlacementGroupResponse(PostPlacementGroupsCreatePlacementGroupResponse createPlacementGroupResponse) {
        this.createPlacementGroupResponse = createPlacementGroupResponse;
        return this;
    }
    public Long statusCode;
    public PostPlacementGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}