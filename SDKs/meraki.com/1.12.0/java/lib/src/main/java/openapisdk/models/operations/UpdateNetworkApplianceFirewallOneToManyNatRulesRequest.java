package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkApplianceFirewallOneToManyNatRulesRequest {
    public UpdateNetworkApplianceFirewallOneToManyNatRulesPathParams pathParams;
    public UpdateNetworkApplianceFirewallOneToManyNatRulesRequest withPathParams(UpdateNetworkApplianceFirewallOneToManyNatRulesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBody request;
    public UpdateNetworkApplianceFirewallOneToManyNatRulesRequest withRequest(UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBody request) {
        this.request = request;
        return this;
    }
}