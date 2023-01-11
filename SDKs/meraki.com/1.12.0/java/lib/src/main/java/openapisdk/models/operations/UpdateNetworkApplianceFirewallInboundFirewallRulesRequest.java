package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkApplianceFirewallInboundFirewallRulesRequest {
    public UpdateNetworkApplianceFirewallInboundFirewallRulesPathParams pathParams;
    public UpdateNetworkApplianceFirewallInboundFirewallRulesRequest withPathParams(UpdateNetworkApplianceFirewallInboundFirewallRulesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBody request;
    public UpdateNetworkApplianceFirewallInboundFirewallRulesRequest withRequest(UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBody request) {
        this.request = request;
        return this;
    }
}