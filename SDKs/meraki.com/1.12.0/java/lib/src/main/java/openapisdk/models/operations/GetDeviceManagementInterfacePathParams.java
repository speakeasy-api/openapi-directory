package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeviceManagementInterfacePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serial")
    public String serial;
    public GetDeviceManagementInterfacePathParams withSerial(String serial) {
        this.serial = serial;
        return this;
    }
}