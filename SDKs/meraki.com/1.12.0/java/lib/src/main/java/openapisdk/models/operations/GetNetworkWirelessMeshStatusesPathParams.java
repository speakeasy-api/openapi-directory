package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkWirelessMeshStatusesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkWirelessMeshStatusesPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}