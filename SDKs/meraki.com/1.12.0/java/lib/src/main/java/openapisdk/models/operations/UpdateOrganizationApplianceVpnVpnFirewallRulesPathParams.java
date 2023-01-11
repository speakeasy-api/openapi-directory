package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateOrganizationApplianceVpnVpnFirewallRulesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public UpdateOrganizationApplianceVpnVpnFirewallRulesPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}