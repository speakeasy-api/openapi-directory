package openapisdk.models.operations;



public class PostFloatingIpsIdActionsUnassignResponse {
    public PostFloatingIpsIdActionsUnassignActionResponse actionResponse;
    public PostFloatingIpsIdActionsUnassignResponse withActionResponse(PostFloatingIpsIdActionsUnassignActionResponse actionResponse) {
        this.actionResponse = actionResponse;
        return this;
    }
    public String contentType;
    public PostFloatingIpsIdActionsUnassignResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostFloatingIpsIdActionsUnassignResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}