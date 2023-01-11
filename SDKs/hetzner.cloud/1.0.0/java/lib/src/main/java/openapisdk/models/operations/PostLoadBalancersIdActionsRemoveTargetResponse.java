package openapisdk.models.operations;



public class PostLoadBalancersIdActionsRemoveTargetResponse {
    public PostLoadBalancersIdActionsRemoveTargetActionResponse actionResponse;
    public PostLoadBalancersIdActionsRemoveTargetResponse withActionResponse(PostLoadBalancersIdActionsRemoveTargetActionResponse actionResponse) {
        this.actionResponse = actionResponse;
        return this;
    }
    public String contentType;
    public PostLoadBalancersIdActionsRemoveTargetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostLoadBalancersIdActionsRemoveTargetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}