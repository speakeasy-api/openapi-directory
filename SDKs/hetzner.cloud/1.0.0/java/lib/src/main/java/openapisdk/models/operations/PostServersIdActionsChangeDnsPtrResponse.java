package openapisdk.models.operations;



public class PostServersIdActionsChangeDnsPtrResponse {
    public PostServersIdActionsChangeDnsPtrActionResponse actionResponse;
    public PostServersIdActionsChangeDnsPtrResponse withActionResponse(PostServersIdActionsChangeDnsPtrActionResponse actionResponse) {
        this.actionResponse = actionResponse;
        return this;
    }
    public String contentType;
    public PostServersIdActionsChangeDnsPtrResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostServersIdActionsChangeDnsPtrResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}