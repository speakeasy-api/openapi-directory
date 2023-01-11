package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkBluetoothClientsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkBluetoothClientsPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}