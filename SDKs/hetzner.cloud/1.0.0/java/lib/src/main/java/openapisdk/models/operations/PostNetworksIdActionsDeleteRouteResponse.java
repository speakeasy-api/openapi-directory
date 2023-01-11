package openapisdk.models.operations;



public class PostNetworksIdActionsDeleteRouteResponse {
    public PostNetworksIdActionsDeleteRouteActionResponse actionResponse;
    public PostNetworksIdActionsDeleteRouteResponse withActionResponse(PostNetworksIdActionsDeleteRouteActionResponse actionResponse) {
        this.actionResponse = actionResponse;
        return this;
    }
    public String contentType;
    public PostNetworksIdActionsDeleteRouteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostNetworksIdActionsDeleteRouteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}