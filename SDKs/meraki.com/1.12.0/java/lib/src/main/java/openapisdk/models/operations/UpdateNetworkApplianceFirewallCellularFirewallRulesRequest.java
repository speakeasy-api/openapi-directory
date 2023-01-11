package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkApplianceFirewallCellularFirewallRulesRequest {
    public UpdateNetworkApplianceFirewallCellularFirewallRulesPathParams pathParams;
    public UpdateNetworkApplianceFirewallCellularFirewallRulesRequest withPathParams(UpdateNetworkApplianceFirewallCellularFirewallRulesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBody request;
    public UpdateNetworkApplianceFirewallCellularFirewallRulesRequest withRequest(UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBody request) {
        this.request = request;
        return this;
    }
}