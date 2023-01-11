package openapisdk.models.operations;



public class PostServersIdActionsDetachFromNetworkResponse {
    public PostServersIdActionsDetachFromNetworkActionResponse actionResponse;
    public PostServersIdActionsDetachFromNetworkResponse withActionResponse(PostServersIdActionsDetachFromNetworkActionResponse actionResponse) {
        this.actionResponse = actionResponse;
        return this;
    }
    public String contentType;
    public PostServersIdActionsDetachFromNetworkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostServersIdActionsDetachFromNetworkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}