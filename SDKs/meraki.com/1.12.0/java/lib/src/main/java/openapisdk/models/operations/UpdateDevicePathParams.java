package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDevicePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serial")
    public String serial;
    public UpdateDevicePathParams withSerial(String serial) {
        this.serial = serial;
        return this;
    }
}