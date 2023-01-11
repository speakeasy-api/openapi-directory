package openapisdk.models.operations;



public class GetLoadBalancersIdActionsActionIdResponse {
    public GetLoadBalancersIdActionsActionIdActionResponse actionResponse;
    public GetLoadBalancersIdActionsActionIdResponse withActionResponse(GetLoadBalancersIdActionsActionIdActionResponse actionResponse) {
        this.actionResponse = actionResponse;
        return this;
    }
    public String contentType;
    public GetLoadBalancersIdActionsActionIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetLoadBalancersIdActionsActionIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}