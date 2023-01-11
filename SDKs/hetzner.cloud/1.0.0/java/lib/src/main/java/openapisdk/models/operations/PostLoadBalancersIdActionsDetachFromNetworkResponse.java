package openapisdk.models.operations;



public class PostLoadBalancersIdActionsDetachFromNetworkResponse {
    public PostLoadBalancersIdActionsDetachFromNetworkActionResponse actionResponse;
    public PostLoadBalancersIdActionsDetachFromNetworkResponse withActionResponse(PostLoadBalancersIdActionsDetachFromNetworkActionResponse actionResponse) {
        this.actionResponse = actionResponse;
        return this;
    }
    public String contentType;
    public PostLoadBalancersIdActionsDetachFromNetworkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostLoadBalancersIdActionsDetachFromNetworkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}