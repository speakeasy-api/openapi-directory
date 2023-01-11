package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDeviceManagementInterfacePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serial")
    public String serial;
    public UpdateDeviceManagementInterfacePathParams withSerial(String serial) {
        this.serial = serial;
        return this;
    }
}