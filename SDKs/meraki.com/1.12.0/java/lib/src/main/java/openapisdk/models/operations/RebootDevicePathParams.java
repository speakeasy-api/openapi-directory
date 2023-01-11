package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RebootDevicePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serial")
    public String serial;
    public RebootDevicePathParams withSerial(String serial) {
        this.serial = serial;
        return this;
    }
}