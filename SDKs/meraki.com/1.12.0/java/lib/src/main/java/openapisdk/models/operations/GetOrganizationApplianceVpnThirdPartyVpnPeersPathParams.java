package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrganizationApplianceVpnThirdPartyVpnPeersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public GetOrganizationApplianceVpnThirdPartyVpnPeersPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}