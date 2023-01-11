package openapisdk.models.operations;



public class PostFirewallsIdActionsSetRulesResponse {
    public PostFirewallsIdActionsSetRulesActionsResponse actionsResponse;
    public PostFirewallsIdActionsSetRulesResponse withActionsResponse(PostFirewallsIdActionsSetRulesActionsResponse actionsResponse) {
        this.actionsResponse = actionsResponse;
        return this;
    }
    public String contentType;
    public PostFirewallsIdActionsSetRulesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostFirewallsIdActionsSetRulesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}