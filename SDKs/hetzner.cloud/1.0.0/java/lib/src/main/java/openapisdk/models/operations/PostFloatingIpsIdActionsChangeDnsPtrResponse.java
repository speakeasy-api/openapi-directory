package openapisdk.models.operations;



public class PostFloatingIpsIdActionsChangeDnsPtrResponse {
    public PostFloatingIpsIdActionsChangeDnsPtrActionResponse actionResponse;
    public PostFloatingIpsIdActionsChangeDnsPtrResponse withActionResponse(PostFloatingIpsIdActionsChangeDnsPtrActionResponse actionResponse) {
        this.actionResponse = actionResponse;
        return this;
    }
    public String contentType;
    public PostFloatingIpsIdActionsChangeDnsPtrResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostFloatingIpsIdActionsChangeDnsPtrResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}