package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeviceSwitchRoutingInterfacePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=interfaceId")
    public String interfaceId;
    public GetDeviceSwitchRoutingInterfacePathParams withInterfaceId(String interfaceId) {
        this.interfaceId = interfaceId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serial")
    public String serial;
    public GetDeviceSwitchRoutingInterfacePathParams withSerial(String serial) {
        this.serial = serial;
        return this;
    }
}