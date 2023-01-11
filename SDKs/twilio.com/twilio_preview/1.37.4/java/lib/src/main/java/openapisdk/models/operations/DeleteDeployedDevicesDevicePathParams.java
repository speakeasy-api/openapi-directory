package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDeployedDevicesDevicePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FleetSid")
    public String fleetSid;
    public DeleteDeployedDevicesDevicePathParams withFleetSid(String fleetSid) {
        this.fleetSid = fleetSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteDeployedDevicesDevicePathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}