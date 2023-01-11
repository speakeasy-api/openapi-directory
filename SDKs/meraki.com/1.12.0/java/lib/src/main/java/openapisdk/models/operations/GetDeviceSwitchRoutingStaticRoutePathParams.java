package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeviceSwitchRoutingStaticRoutePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serial")
    public String serial;
    public GetDeviceSwitchRoutingStaticRoutePathParams withSerial(String serial) {
        this.serial = serial;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=staticRouteId")
    public String staticRouteId;
    public GetDeviceSwitchRoutingStaticRoutePathParams withStaticRouteId(String staticRouteId) {
        this.staticRouteId = staticRouteId;
        return this;
    }
}