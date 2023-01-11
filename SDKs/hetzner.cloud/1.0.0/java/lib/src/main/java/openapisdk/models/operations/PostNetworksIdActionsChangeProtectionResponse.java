package openapisdk.models.operations;



public class PostNetworksIdActionsChangeProtectionResponse {
    public PostNetworksIdActionsChangeProtectionActionResponse actionResponse;
    public PostNetworksIdActionsChangeProtectionResponse withActionResponse(PostNetworksIdActionsChangeProtectionActionResponse actionResponse) {
        this.actionResponse = actionResponse;
        return this;
    }
    public String contentType;
    public PostNetworksIdActionsChangeProtectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostNetworksIdActionsChangeProtectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}