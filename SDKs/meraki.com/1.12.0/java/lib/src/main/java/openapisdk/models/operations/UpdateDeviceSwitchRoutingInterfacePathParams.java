package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDeviceSwitchRoutingInterfacePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=interfaceId")
    public String interfaceId;
    public UpdateDeviceSwitchRoutingInterfacePathParams withInterfaceId(String interfaceId) {
        this.interfaceId = interfaceId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serial")
    public String serial;
    public UpdateDeviceSwitchRoutingInterfacePathParams withSerial(String serial) {
        this.serial = serial;
        return this;
    }
}