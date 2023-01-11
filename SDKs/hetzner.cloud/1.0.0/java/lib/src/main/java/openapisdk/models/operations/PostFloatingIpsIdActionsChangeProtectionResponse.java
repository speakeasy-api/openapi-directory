package openapisdk.models.operations;



public class PostFloatingIpsIdActionsChangeProtectionResponse {
    public PostFloatingIpsIdActionsChangeProtectionActionResponse actionResponse;
    public PostFloatingIpsIdActionsChangeProtectionResponse withActionResponse(PostFloatingIpsIdActionsChangeProtectionActionResponse actionResponse) {
        this.actionResponse = actionResponse;
        return this;
    }
    public String contentType;
    public PostFloatingIpsIdActionsChangeProtectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostFloatingIpsIdActionsChangeProtectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}