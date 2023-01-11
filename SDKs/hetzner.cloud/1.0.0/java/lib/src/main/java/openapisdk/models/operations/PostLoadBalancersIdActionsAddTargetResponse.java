package openapisdk.models.operations;



public class PostLoadBalancersIdActionsAddTargetResponse {
    public PostLoadBalancersIdActionsAddTargetActionResponse actionResponse;
    public PostLoadBalancersIdActionsAddTargetResponse withActionResponse(PostLoadBalancersIdActionsAddTargetActionResponse actionResponse) {
        this.actionResponse = actionResponse;
        return this;
    }
    public String contentType;
    public PostLoadBalancersIdActionsAddTargetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostLoadBalancersIdActionsAddTargetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}