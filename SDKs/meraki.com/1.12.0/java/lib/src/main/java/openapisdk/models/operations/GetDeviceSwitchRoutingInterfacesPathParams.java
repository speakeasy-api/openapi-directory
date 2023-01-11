package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeviceSwitchRoutingInterfacesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serial")
    public String serial;
    public GetDeviceSwitchRoutingInterfacesPathParams withSerial(String serial) {
        this.serial = serial;
        return this;
    }
}