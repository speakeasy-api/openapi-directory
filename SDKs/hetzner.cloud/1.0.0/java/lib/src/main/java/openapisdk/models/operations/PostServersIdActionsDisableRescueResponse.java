package openapisdk.models.operations;



public class PostServersIdActionsDisableRescueResponse {
    public PostServersIdActionsDisableRescueActionResponse actionResponse;
    public PostServersIdActionsDisableRescueResponse withActionResponse(PostServersIdActionsDisableRescueActionResponse actionResponse) {
        this.actionResponse = actionResponse;
        return this;
    }
    public String contentType;
    public PostServersIdActionsDisableRescueResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostServersIdActionsDisableRescueResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}