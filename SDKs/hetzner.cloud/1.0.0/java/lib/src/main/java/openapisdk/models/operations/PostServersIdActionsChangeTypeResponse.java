package openapisdk.models.operations;



public class PostServersIdActionsChangeTypeResponse {
    public PostServersIdActionsChangeTypeActionResponse actionResponse;
    public PostServersIdActionsChangeTypeResponse withActionResponse(PostServersIdActionsChangeTypeActionResponse actionResponse) {
        this.actionResponse = actionResponse;
        return this;
    }
    public String contentType;
    public PostServersIdActionsChangeTypeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostServersIdActionsChangeTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}