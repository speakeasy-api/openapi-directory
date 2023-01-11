package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeviceSwitchPortsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serial")
    public String serial;
    public GetDeviceSwitchPortsPathParams withSerial(String serial) {
        this.serial = serial;
        return this;
    }
}