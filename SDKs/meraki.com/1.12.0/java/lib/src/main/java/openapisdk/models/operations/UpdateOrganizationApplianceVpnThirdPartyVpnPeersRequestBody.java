package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBody {
    @JsonProperty("peers")
    public UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeers[] peers;
    public UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBody withPeers(UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeers[] peers) {
        this.peers = peers;
        return this;
    }
}