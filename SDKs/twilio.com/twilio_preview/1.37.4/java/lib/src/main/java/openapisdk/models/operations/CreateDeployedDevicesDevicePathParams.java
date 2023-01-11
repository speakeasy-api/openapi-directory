package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDeployedDevicesDevicePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FleetSid")
    public String fleetSid;
    public CreateDeployedDevicesDevicePathParams withFleetSid(String fleetSid) {
        this.fleetSid = fleetSid;
        return this;
    }
}