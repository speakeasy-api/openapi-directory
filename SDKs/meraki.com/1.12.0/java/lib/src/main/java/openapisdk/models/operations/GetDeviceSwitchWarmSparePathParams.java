package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeviceSwitchWarmSparePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serial")
    public String serial;
    public GetDeviceSwitchWarmSparePathParams withSerial(String serial) {
        this.serial = serial;
        return this;
    }
}