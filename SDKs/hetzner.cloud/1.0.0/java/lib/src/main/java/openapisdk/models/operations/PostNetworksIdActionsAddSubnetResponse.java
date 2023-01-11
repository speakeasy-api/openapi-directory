package openapisdk.models.operations;



public class PostNetworksIdActionsAddSubnetResponse {
    public PostNetworksIdActionsAddSubnetActionResponse actionResponse;
    public PostNetworksIdActionsAddSubnetResponse withActionResponse(PostNetworksIdActionsAddSubnetActionResponse actionResponse) {
        this.actionResponse = actionResponse;
        return this;
    }
    public String contentType;
    public PostNetworksIdActionsAddSubnetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostNetworksIdActionsAddSubnetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}