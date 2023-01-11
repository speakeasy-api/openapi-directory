package openapisdk.models.operations;



public class PostServersIdActionsChangeProtectionResponse {
    public PostServersIdActionsChangeProtectionActionResponse actionResponse;
    public PostServersIdActionsChangeProtectionResponse withActionResponse(PostServersIdActionsChangeProtectionActionResponse actionResponse) {
        this.actionResponse = actionResponse;
        return this;
    }
    public String contentType;
    public PostServersIdActionsChangeProtectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostServersIdActionsChangeProtectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}