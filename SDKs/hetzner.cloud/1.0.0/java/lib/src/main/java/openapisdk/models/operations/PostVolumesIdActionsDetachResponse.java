package openapisdk.models.operations;



public class PostVolumesIdActionsDetachResponse {
    public PostVolumesIdActionsDetachActionResponse actionResponse;
    public PostVolumesIdActionsDetachResponse withActionResponse(PostVolumesIdActionsDetachActionResponse actionResponse) {
        this.actionResponse = actionResponse;
        return this;
    }
    public String contentType;
    public PostVolumesIdActionsDetachResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostVolumesIdActionsDetachResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}