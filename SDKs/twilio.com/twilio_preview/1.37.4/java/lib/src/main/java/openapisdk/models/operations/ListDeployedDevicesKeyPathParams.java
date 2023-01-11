package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDeployedDevicesKeyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FleetSid")
    public String fleetSid;
    public ListDeployedDevicesKeyPathParams withFleetSid(String fleetSid) {
        this.fleetSid = fleetSid;
        return this;
    }
}