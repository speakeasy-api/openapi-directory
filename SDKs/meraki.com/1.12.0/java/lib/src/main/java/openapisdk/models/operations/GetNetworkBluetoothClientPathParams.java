package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkBluetoothClientPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=bluetoothClientId")
    public String bluetoothClientId;
    public GetNetworkBluetoothClientPathParams withBluetoothClientId(String bluetoothClientId) {
        this.bluetoothClientId = bluetoothClientId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkBluetoothClientPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}