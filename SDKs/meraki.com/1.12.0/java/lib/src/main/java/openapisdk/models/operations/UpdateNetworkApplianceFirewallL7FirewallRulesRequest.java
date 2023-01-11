package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkApplianceFirewallL7FirewallRulesRequest {
    public UpdateNetworkApplianceFirewallL7FirewallRulesPathParams pathParams;
    public UpdateNetworkApplianceFirewallL7FirewallRulesRequest withPathParams(UpdateNetworkApplianceFirewallL7FirewallRulesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkApplianceFirewallL7FirewallRulesRequestBody request;
    public UpdateNetworkApplianceFirewallL7FirewallRulesRequest withRequest(UpdateNetworkApplianceFirewallL7FirewallRulesRequestBody request) {
        this.request = request;
        return this;
    }
}