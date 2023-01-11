package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDeployedDevicesDeploymentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FleetSid")
    public String fleetSid;
    public ListDeployedDevicesDeploymentPathParams withFleetSid(String fleetSid) {
        this.fleetSid = fleetSid;
        return this;
    }
}