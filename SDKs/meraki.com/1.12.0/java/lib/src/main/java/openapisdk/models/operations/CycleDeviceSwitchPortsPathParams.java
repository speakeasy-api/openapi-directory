package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CycleDeviceSwitchPortsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serial")
    public String serial;
    public CycleDeviceSwitchPortsPathParams withSerial(String serial) {
        this.serial = serial;
        return this;
    }
}