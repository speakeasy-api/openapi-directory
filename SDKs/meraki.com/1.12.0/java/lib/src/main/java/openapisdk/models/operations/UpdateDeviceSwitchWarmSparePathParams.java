package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDeviceSwitchWarmSparePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serial")
    public String serial;
    public UpdateDeviceSwitchWarmSparePathParams withSerial(String serial) {
        this.serial = serial;
        return this;
    }
}