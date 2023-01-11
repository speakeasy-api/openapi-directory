package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest {
    public UpdateNetworkWirelessSsidFirewallL7FirewallRulesPathParams pathParams;
    public UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest withPathParams(UpdateNetworkWirelessSsidFirewallL7FirewallRulesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBody request;
    public UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest withRequest(UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBody request) {
        this.request = request;
        return this;
    }
}