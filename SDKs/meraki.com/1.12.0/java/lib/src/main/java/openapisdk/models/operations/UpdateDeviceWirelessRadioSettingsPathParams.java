package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDeviceWirelessRadioSettingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serial")
    public String serial;
    public UpdateDeviceWirelessRadioSettingsPathParams withSerial(String serial) {
        this.serial = serial;
        return this;
    }
}