package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDeviceSwitchRoutingInterfacePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serial")
    public String serial;
    public CreateDeviceSwitchRoutingInterfacePathParams withSerial(String serial) {
        this.serial = serial;
        return this;
    }
}