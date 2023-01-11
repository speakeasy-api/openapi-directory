package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDeployedDevicesKeyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FleetSid")
    public String fleetSid;
    public CreateDeployedDevicesKeyPathParams withFleetSid(String fleetSid) {
        this.fleetSid = fleetSid;
        return this;
    }
}