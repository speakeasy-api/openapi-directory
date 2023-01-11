package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest {
    public UpdateNetworkWirelessSsidFirewallL3FirewallRulesPathParams pathParams;
    public UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest withPathParams(UpdateNetworkWirelessSsidFirewallL3FirewallRulesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBody request;
    public UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest withRequest(UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBody request) {
        this.request = request;
        return this;
    }
}