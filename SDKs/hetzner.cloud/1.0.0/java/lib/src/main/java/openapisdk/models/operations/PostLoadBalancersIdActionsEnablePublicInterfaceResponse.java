package openapisdk.models.operations;



public class PostLoadBalancersIdActionsEnablePublicInterfaceResponse {
    public PostLoadBalancersIdActionsEnablePublicInterfaceActionResponse actionResponse;
    public PostLoadBalancersIdActionsEnablePublicInterfaceResponse withActionResponse(PostLoadBalancersIdActionsEnablePublicInterfaceActionResponse actionResponse) {
        this.actionResponse = actionResponse;
        return this;
    }
    public String contentType;
    public PostLoadBalancersIdActionsEnablePublicInterfaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostLoadBalancersIdActionsEnablePublicInterfaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}