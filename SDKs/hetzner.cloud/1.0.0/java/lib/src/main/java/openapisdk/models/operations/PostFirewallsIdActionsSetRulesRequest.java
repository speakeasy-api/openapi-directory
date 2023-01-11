package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostFirewallsIdActionsSetRulesRequest {
    public PostFirewallsIdActionsSetRulesPathParams pathParams;
    public PostFirewallsIdActionsSetRulesRequest withPathParams(PostFirewallsIdActionsSetRulesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostFirewallsIdActionsSetRulesSetRulesRequest request;
    public PostFirewallsIdActionsSetRulesRequest withRequest(PostFirewallsIdActionsSetRulesSetRulesRequest request) {
        this.request = request;
        return this;
    }
}