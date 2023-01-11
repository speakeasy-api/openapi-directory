package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkPiiSmDevicesForKeyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkPiiSmDevicesForKeyPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}