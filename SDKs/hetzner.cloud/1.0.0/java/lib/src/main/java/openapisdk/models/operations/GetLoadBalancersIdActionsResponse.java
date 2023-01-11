package openapisdk.models.operations;



public class GetLoadBalancersIdActionsResponse {
    public GetLoadBalancersIdActionsActionsResponse actionsResponse;
    public GetLoadBalancersIdActionsResponse withActionsResponse(GetLoadBalancersIdActionsActionsResponse actionsResponse) {
        this.actionsResponse = actionsResponse;
        return this;
    }
    public String contentType;
    public GetLoadBalancersIdActionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetLoadBalancersIdActionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}