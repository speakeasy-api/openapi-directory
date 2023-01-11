package openapisdk.models.operations;



public class PostFloatingIpsIdActionsAssignResponse {
    public PostFloatingIpsIdActionsAssignActionResponse actionResponse;
    public PostFloatingIpsIdActionsAssignResponse withActionResponse(PostFloatingIpsIdActionsAssignActionResponse actionResponse) {
        this.actionResponse = actionResponse;
        return this;
    }
    public String contentType;
    public PostFloatingIpsIdActionsAssignResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostFloatingIpsIdActionsAssignResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}