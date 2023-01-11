package openapisdk.models.operations;



public class PostVolumesIdActionsResizeResponse {
    public PostVolumesIdActionsResizeActionResponse actionResponse;
    public PostVolumesIdActionsResizeResponse withActionResponse(PostVolumesIdActionsResizeActionResponse actionResponse) {
        this.actionResponse = actionResponse;
        return this;
    }
    public String contentType;
    public PostVolumesIdActionsResizeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostVolumesIdActionsResizeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}