package openapisdk.models.operations;



public class PostLoadBalancersIdActionsAttachToNetworkResponse {
    public PostLoadBalancersIdActionsAttachToNetworkActionResponse actionResponse;
    public PostLoadBalancersIdActionsAttachToNetworkResponse withActionResponse(PostLoadBalancersIdActionsAttachToNetworkActionResponse actionResponse) {
        this.actionResponse = actionResponse;
        return this;
    }
    public String contentType;
    public PostLoadBalancersIdActionsAttachToNetworkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostLoadBalancersIdActionsAttachToNetworkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}