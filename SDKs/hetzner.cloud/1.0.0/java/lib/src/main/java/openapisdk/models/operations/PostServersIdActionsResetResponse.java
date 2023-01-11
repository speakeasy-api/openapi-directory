package openapisdk.models.operations;



public class PostServersIdActionsResetResponse {
    public PostServersIdActionsResetActionResponse actionResponse;
    public PostServersIdActionsResetResponse withActionResponse(PostServersIdActionsResetActionResponse actionResponse) {
        this.actionResponse = actionResponse;
        return this;
    }
    public String contentType;
    public PostServersIdActionsResetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostServersIdActionsResetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}