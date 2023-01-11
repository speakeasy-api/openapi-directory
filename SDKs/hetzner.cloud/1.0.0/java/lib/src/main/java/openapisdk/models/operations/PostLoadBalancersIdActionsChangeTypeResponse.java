package openapisdk.models.operations;



public class PostLoadBalancersIdActionsChangeTypeResponse {
    public PostLoadBalancersIdActionsChangeTypeActionResponse actionResponse;
    public PostLoadBalancersIdActionsChangeTypeResponse withActionResponse(PostLoadBalancersIdActionsChangeTypeActionResponse actionResponse) {
        this.actionResponse = actionResponse;
        return this;
    }
    public String contentType;
    public PostLoadBalancersIdActionsChangeTypeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostLoadBalancersIdActionsChangeTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}