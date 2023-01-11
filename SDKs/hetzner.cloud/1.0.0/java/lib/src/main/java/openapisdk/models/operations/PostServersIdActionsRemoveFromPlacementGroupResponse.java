package openapisdk.models.operations;



public class PostServersIdActionsRemoveFromPlacementGroupResponse {
    public PostServersIdActionsRemoveFromPlacementGroupActionResponse actionResponse;
    public PostServersIdActionsRemoveFromPlacementGroupResponse withActionResponse(PostServersIdActionsRemoveFromPlacementGroupActionResponse actionResponse) {
        this.actionResponse = actionResponse;
        return this;
    }
    public String contentType;
    public PostServersIdActionsRemoveFromPlacementGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostServersIdActionsRemoveFromPlacementGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}