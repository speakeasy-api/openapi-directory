package openapisdk.models.operations;



public class PostVolumesIdActionsAttachResponse {
    public PostVolumesIdActionsAttachActionResponse actionResponse;
    public PostVolumesIdActionsAttachResponse withActionResponse(PostVolumesIdActionsAttachActionResponse actionResponse) {
        this.actionResponse = actionResponse;
        return this;
    }
    public String contentType;
    public PostVolumesIdActionsAttachResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostVolumesIdActionsAttachResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}