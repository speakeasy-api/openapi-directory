package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDeployedDevicesDeploymentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FleetSid")
    public String fleetSid;
    public CreateDeployedDevicesDeploymentPathParams withFleetSid(String fleetSid) {
        this.fleetSid = fleetSid;
        return this;
    }
}