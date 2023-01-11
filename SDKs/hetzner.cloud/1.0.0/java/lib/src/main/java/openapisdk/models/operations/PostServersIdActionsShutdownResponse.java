package openapisdk.models.operations;



public class PostServersIdActionsShutdownResponse {
    public PostServersIdActionsShutdownActionResponse actionResponse;
    public PostServersIdActionsShutdownResponse withActionResponse(PostServersIdActionsShutdownActionResponse actionResponse) {
        this.actionResponse = actionResponse;
        return this;
    }
    public String contentType;
    public PostServersIdActionsShutdownResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostServersIdActionsShutdownResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}