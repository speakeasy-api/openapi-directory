package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkWirelessBluetoothSettingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkWirelessBluetoothSettingsPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}