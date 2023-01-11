package openapisdk.models.operations;



public class PostImagesIdActionsChangeProtectionResponse {
    public PostImagesIdActionsChangeProtectionActionResponse actionResponse;
    public PostImagesIdActionsChangeProtectionResponse withActionResponse(PostImagesIdActionsChangeProtectionActionResponse actionResponse) {
        this.actionResponse = actionResponse;
        return this;
    }
    public String contentType;
    public PostImagesIdActionsChangeProtectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostImagesIdActionsChangeProtectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}