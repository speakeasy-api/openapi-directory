package openapisdk.models.operations;



public class PostLoadBalancersIdActionsUpdateServiceResponse {
    public PostLoadBalancersIdActionsUpdateServiceActionResponse actionResponse;
    public PostLoadBalancersIdActionsUpdateServiceResponse withActionResponse(PostLoadBalancersIdActionsUpdateServiceActionResponse actionResponse) {
        this.actionResponse = actionResponse;
        return this;
    }
    public String contentType;
    public PostLoadBalancersIdActionsUpdateServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostLoadBalancersIdActionsUpdateServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}