package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkWirelessBluetoothSettingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public UpdateNetworkWirelessBluetoothSettingsPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}