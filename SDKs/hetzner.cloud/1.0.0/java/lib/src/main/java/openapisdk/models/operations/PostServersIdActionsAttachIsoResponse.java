package openapisdk.models.operations;



public class PostServersIdActionsAttachIsoResponse {
    public PostServersIdActionsAttachIsoActionResponse actionResponse;
    public PostServersIdActionsAttachIsoResponse withActionResponse(PostServersIdActionsAttachIsoActionResponse actionResponse) {
        this.actionResponse = actionResponse;
        return this;
    }
    public String contentType;
    public PostServersIdActionsAttachIsoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostServersIdActionsAttachIsoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}