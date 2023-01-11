package openapisdk.models.operations;



public class PostLoadBalancersIdActionsChangeDnsPtrResponse {
    public PostLoadBalancersIdActionsChangeDnsPtrActionResponse actionResponse;
    public PostLoadBalancersIdActionsChangeDnsPtrResponse withActionResponse(PostLoadBalancersIdActionsChangeDnsPtrActionResponse actionResponse) {
        this.actionResponse = actionResponse;
        return this;
    }
    public String contentType;
    public PostLoadBalancersIdActionsChangeDnsPtrResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostLoadBalancersIdActionsChangeDnsPtrResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}