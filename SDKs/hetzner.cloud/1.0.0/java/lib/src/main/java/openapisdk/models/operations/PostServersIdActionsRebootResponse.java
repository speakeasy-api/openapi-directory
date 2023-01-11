package openapisdk.models.operations;



public class PostServersIdActionsRebootResponse {
    public PostServersIdActionsRebootActionResponse actionResponse;
    public PostServersIdActionsRebootResponse withActionResponse(PostServersIdActionsRebootActionResponse actionResponse) {
        this.actionResponse = actionResponse;
        return this;
    }
    public String contentType;
    public PostServersIdActionsRebootResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostServersIdActionsRebootResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}