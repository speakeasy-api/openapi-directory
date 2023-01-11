package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeviceCameraWirelessProfilesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serial")
    public String serial;
    public GetDeviceCameraWirelessProfilesPathParams withSerial(String serial) {
        this.serial = serial;
        return this;
    }
}