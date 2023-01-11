package openapisdk.models.operations;



public class PostServersIdActionsDetachIsoResponse {
    public PostServersIdActionsDetachIsoActionResponse actionResponse;
    public PostServersIdActionsDetachIsoResponse withActionResponse(PostServersIdActionsDetachIsoActionResponse actionResponse) {
        this.actionResponse = actionResponse;
        return this;
    }
    public String contentType;
    public PostServersIdActionsDetachIsoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostServersIdActionsDetachIsoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}