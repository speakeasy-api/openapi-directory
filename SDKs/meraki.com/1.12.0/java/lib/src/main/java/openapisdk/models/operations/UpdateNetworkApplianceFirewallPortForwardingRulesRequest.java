package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkApplianceFirewallPortForwardingRulesRequest {
    public UpdateNetworkApplianceFirewallPortForwardingRulesPathParams pathParams;
    public UpdateNetworkApplianceFirewallPortForwardingRulesRequest withPathParams(UpdateNetworkApplianceFirewallPortForwardingRulesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkApplianceFirewallPortForwardingRulesRequestBody request;
    public UpdateNetworkApplianceFirewallPortForwardingRulesRequest withRequest(UpdateNetworkApplianceFirewallPortForwardingRulesRequestBody request) {
        this.request = request;
        return this;
    }
}