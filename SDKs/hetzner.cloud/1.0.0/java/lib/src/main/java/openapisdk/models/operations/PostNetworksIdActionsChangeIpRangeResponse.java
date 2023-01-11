package openapisdk.models.operations;



public class PostNetworksIdActionsChangeIpRangeResponse {
    public PostNetworksIdActionsChangeIpRangeActionResponse actionResponse;
    public PostNetworksIdActionsChangeIpRangeResponse withActionResponse(PostNetworksIdActionsChangeIpRangeActionResponse actionResponse) {
        this.actionResponse = actionResponse;
        return this;
    }
    public String contentType;
    public PostNetworksIdActionsChangeIpRangeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostNetworksIdActionsChangeIpRangeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}