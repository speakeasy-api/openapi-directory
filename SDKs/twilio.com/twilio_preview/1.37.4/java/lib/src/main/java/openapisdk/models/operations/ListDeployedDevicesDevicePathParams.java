package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDeployedDevicesDevicePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FleetSid")
    public String fleetSid;
    public ListDeployedDevicesDevicePathParams withFleetSid(String fleetSid) {
        this.fleetSid = fleetSid;
        return this;
    }
}