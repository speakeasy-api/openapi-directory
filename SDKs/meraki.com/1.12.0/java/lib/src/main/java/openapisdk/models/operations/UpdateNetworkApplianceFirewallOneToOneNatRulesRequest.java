package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkApplianceFirewallOneToOneNatRulesRequest {
    public UpdateNetworkApplianceFirewallOneToOneNatRulesPathParams pathParams;
    public UpdateNetworkApplianceFirewallOneToOneNatRulesRequest withPathParams(UpdateNetworkApplianceFirewallOneToOneNatRulesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBody request;
    public UpdateNetworkApplianceFirewallOneToOneNatRulesRequest withRequest(UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBody request) {
        this.request = request;
        return this;
    }
}