package openapisdk.models.operations;



public class GetFirewallsIdActionsResponse {
    public GetFirewallsIdActionsActionsResponse actionsResponse;
    public GetFirewallsIdActionsResponse withActionsResponse(GetFirewallsIdActionsActionsResponse actionsResponse) {
        this.actionsResponse = actionsResponse;
        return this;
    }
    public String contentType;
    public GetFirewallsIdActionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetFirewallsIdActionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}