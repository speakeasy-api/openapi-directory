package openapisdk.models.operations;



public class PostServersIdActionsAddToPlacementGroupResponse {
    public PostServersIdActionsAddToPlacementGroupActionResponse actionResponse;
    public PostServersIdActionsAddToPlacementGroupResponse withActionResponse(PostServersIdActionsAddToPlacementGroupActionResponse actionResponse) {
        this.actionResponse = actionResponse;
        return this;
    }
    public String contentType;
    public PostServersIdActionsAddToPlacementGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostServersIdActionsAddToPlacementGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}