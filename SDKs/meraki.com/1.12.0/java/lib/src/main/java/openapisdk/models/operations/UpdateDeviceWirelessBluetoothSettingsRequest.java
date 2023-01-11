package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDeviceWirelessBluetoothSettingsRequest {
    public UpdateDeviceWirelessBluetoothSettingsPathParams pathParams;
    public UpdateDeviceWirelessBluetoothSettingsRequest withPathParams(UpdateDeviceWirelessBluetoothSettingsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateDeviceWirelessBluetoothSettingsRequestBody request;
    public UpdateDeviceWirelessBluetoothSettingsRequest withRequest(UpdateDeviceWirelessBluetoothSettingsRequestBody request) {
        this.request = request;
        return this;
    }
}