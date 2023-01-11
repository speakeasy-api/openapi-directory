package openapisdk.models.operations;



public class PostServersIdActionsAttachToNetworkResponse {
    public PostServersIdActionsAttachToNetworkActionResponse actionResponse;
    public PostServersIdActionsAttachToNetworkResponse withActionResponse(PostServersIdActionsAttachToNetworkActionResponse actionResponse) {
        this.actionResponse = actionResponse;
        return this;
    }
    public String contentType;
    public PostServersIdActionsAttachToNetworkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostServersIdActionsAttachToNetworkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}