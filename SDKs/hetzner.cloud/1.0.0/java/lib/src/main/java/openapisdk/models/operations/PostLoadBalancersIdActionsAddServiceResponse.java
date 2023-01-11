package openapisdk.models.operations;



public class PostLoadBalancersIdActionsAddServiceResponse {
    public PostLoadBalancersIdActionsAddServiceActionResponse actionResponse;
    public PostLoadBalancersIdActionsAddServiceResponse withActionResponse(PostLoadBalancersIdActionsAddServiceActionResponse actionResponse) {
        this.actionResponse = actionResponse;
        return this;
    }
    public String contentType;
    public PostLoadBalancersIdActionsAddServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostLoadBalancersIdActionsAddServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}