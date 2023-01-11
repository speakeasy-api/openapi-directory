package openapisdk.models.operations;



public class PostLoadBalancersIdActionsChangeProtectionResponse {
    public PostLoadBalancersIdActionsChangeProtectionActionResponse actionResponse;
    public PostLoadBalancersIdActionsChangeProtectionResponse withActionResponse(PostLoadBalancersIdActionsChangeProtectionActionResponse actionResponse) {
        this.actionResponse = actionResponse;
        return this;
    }
    public String contentType;
    public PostLoadBalancersIdActionsChangeProtectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostLoadBalancersIdActionsChangeProtectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}