package openapisdk.models.operations;



public class PostLoadBalancersIdActionsDeleteServiceResponse {
    public PostLoadBalancersIdActionsDeleteServiceActionResponse actionResponse;
    public PostLoadBalancersIdActionsDeleteServiceResponse withActionResponse(PostLoadBalancersIdActionsDeleteServiceActionResponse actionResponse) {
        this.actionResponse = actionResponse;
        return this;
    }
    public String contentType;
    public PostLoadBalancersIdActionsDeleteServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostLoadBalancersIdActionsDeleteServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}