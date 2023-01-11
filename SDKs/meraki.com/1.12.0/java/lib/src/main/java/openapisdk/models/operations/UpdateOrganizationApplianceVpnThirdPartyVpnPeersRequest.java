package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequest {
    public UpdateOrganizationApplianceVpnThirdPartyVpnPeersPathParams pathParams;
    public UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequest withPathParams(UpdateOrganizationApplianceVpnThirdPartyVpnPeersPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBody request;
    public UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequest withRequest(UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBody request) {
        this.request = request;
        return this;
    }
}