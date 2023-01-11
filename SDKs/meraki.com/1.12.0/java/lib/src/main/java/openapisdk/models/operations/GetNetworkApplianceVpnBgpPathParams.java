package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkApplianceVpnBgpPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkApplianceVpnBgpPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}