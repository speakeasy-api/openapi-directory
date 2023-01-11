package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkWirelessSsidFirewallL7FirewallRulesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public UpdateNetworkWirelessSsidFirewallL7FirewallRulesPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=number")
    public String number;
    public UpdateNetworkWirelessSsidFirewallL7FirewallRulesPathParams withNumber(String number) {
        this.number = number;
        return this;
    }
}