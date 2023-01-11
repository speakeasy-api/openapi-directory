package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeviceWirelessRadioSettingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serial")
    public String serial;
    public GetDeviceWirelessRadioSettingsPathParams withSerial(String serial) {
        this.serial = serial;
        return this;
    }
}