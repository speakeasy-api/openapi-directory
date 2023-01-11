package openapisdk.models.operations;



public class PostFirewallsIdActionsRemoveFromResourcesResponse {
    public PostFirewallsIdActionsRemoveFromResourcesActionsResponse actionsResponse;
    public PostFirewallsIdActionsRemoveFromResourcesResponse withActionsResponse(PostFirewallsIdActionsRemoveFromResourcesActionsResponse actionsResponse) {
        this.actionsResponse = actionsResponse;
        return this;
    }
    public String contentType;
    public PostFirewallsIdActionsRemoveFromResourcesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostFirewallsIdActionsRemoveFromResourcesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}