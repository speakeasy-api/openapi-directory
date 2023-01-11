package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDeviceSwitchRoutingStaticRoutePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serial")
    public String serial;
    public CreateDeviceSwitchRoutingStaticRoutePathParams withSerial(String serial) {
        this.serial = serial;
        return this;
    }
}