package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDeviceCameraWirelessProfilesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serial")
    public String serial;
    public UpdateDeviceCameraWirelessProfilesPathParams withSerial(String serial) {
        this.serial = serial;
        return this;
    }
}