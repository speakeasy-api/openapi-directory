package openapisdk.models.operations;



public class PostNetworksIdActionsAddRouteResponse {
    public PostNetworksIdActionsAddRouteActionResponse actionResponse;
    public PostNetworksIdActionsAddRouteResponse withActionResponse(PostNetworksIdActionsAddRouteActionResponse actionResponse) {
        this.actionResponse = actionResponse;
        return this;
    }
    public String contentType;
    public PostNetworksIdActionsAddRouteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostNetworksIdActionsAddRouteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}