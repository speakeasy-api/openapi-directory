package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateOrganizationApplianceVpnThirdPartyVpnPeersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public UpdateOrganizationApplianceVpnThirdPartyVpnPeersPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}