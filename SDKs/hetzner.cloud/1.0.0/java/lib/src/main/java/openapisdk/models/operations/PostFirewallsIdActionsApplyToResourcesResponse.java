package openapisdk.models.operations;



public class PostFirewallsIdActionsApplyToResourcesResponse {
    public PostFirewallsIdActionsApplyToResourcesActionsResponse actionsResponse;
    public PostFirewallsIdActionsApplyToResourcesResponse withActionsResponse(PostFirewallsIdActionsApplyToResourcesActionsResponse actionsResponse) {
        this.actionsResponse = actionsResponse;
        return this;
    }
    public String contentType;
    public PostFirewallsIdActionsApplyToResourcesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostFirewallsIdActionsApplyToResourcesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}