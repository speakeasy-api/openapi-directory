package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeviceWirelessBluetoothSettingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serial")
    public String serial;
    public GetDeviceWirelessBluetoothSettingsPathParams withSerial(String serial) {
        this.serial = serial;
        return this;
    }
}