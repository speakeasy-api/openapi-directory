package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkApplianceVpnBgpPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public UpdateNetworkApplianceVpnBgpPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}