package openapisdk.models.operations;



public class PostVolumesIdActionsChangeProtectionResponse {
    public PostVolumesIdActionsChangeProtectionActionResponse actionResponse;
    public PostVolumesIdActionsChangeProtectionResponse withActionResponse(PostVolumesIdActionsChangeProtectionActionResponse actionResponse) {
        this.actionResponse = actionResponse;
        return this;
    }
    public String contentType;
    public PostVolumesIdActionsChangeProtectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostVolumesIdActionsChangeProtectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}