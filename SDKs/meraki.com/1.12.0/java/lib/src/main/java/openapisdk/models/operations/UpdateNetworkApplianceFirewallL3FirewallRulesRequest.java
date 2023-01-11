package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkApplianceFirewallL3FirewallRulesRequest {
    public UpdateNetworkApplianceFirewallL3FirewallRulesPathParams pathParams;
    public UpdateNetworkApplianceFirewallL3FirewallRulesRequest withPathParams(UpdateNetworkApplianceFirewallL3FirewallRulesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkApplianceFirewallL3FirewallRulesRequestBody request;
    public UpdateNetworkApplianceFirewallL3FirewallRulesRequest withRequest(UpdateNetworkApplianceFirewallL3FirewallRulesRequestBody request) {
        this.request = request;
        return this;
    }
}