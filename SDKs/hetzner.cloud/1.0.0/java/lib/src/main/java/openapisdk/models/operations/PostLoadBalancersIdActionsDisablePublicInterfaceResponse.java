package openapisdk.models.operations;



public class PostLoadBalancersIdActionsDisablePublicInterfaceResponse {
    public PostLoadBalancersIdActionsDisablePublicInterfaceActionResponse actionResponse;
    public PostLoadBalancersIdActionsDisablePublicInterfaceResponse withActionResponse(PostLoadBalancersIdActionsDisablePublicInterfaceActionResponse actionResponse) {
        this.actionResponse = actionResponse;
        return this;
    }
    public String contentType;
    public PostLoadBalancersIdActionsDisablePublicInterfaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostLoadBalancersIdActionsDisablePublicInterfaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}