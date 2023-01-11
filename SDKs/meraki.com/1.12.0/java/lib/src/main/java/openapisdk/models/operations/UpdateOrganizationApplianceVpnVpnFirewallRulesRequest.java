package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateOrganizationApplianceVpnVpnFirewallRulesRequest {
    public UpdateOrganizationApplianceVpnVpnFirewallRulesPathParams pathParams;
    public UpdateOrganizationApplianceVpnVpnFirewallRulesRequest withPathParams(UpdateOrganizationApplianceVpnVpnFirewallRulesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBody request;
    public UpdateOrganizationApplianceVpnVpnFirewallRulesRequest withRequest(UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBody request) {
        this.request = request;
        return this;
    }
}