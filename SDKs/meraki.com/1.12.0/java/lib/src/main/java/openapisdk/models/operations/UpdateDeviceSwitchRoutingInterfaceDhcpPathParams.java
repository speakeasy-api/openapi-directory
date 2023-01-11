package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDeviceSwitchRoutingInterfaceDhcpPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=interfaceId")
    public String interfaceId;
    public UpdateDeviceSwitchRoutingInterfaceDhcpPathParams withInterfaceId(String interfaceId) {
        this.interfaceId = interfaceId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serial")
    public String serial;
    public UpdateDeviceSwitchRoutingInterfaceDhcpPathParams withSerial(String serial) {
        this.serial = serial;
        return this;
    }
}