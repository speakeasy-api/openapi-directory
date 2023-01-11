package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkWirelessBluetoothSettingsRequest {
    public UpdateNetworkWirelessBluetoothSettingsPathParams pathParams;
    public UpdateNetworkWirelessBluetoothSettingsRequest withPathParams(UpdateNetworkWirelessBluetoothSettingsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkWirelessBluetoothSettingsRequestBody request;
    public UpdateNetworkWirelessBluetoothSettingsRequest withRequest(UpdateNetworkWirelessBluetoothSettingsRequestBody request) {
        this.request = request;
        return this;
    }
}