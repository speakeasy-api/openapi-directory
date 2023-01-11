package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrganizationApplianceVpnVpnFirewallRulesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public GetOrganizationApplianceVpnVpnFirewallRulesPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}