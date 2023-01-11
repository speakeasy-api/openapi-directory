package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDeployedDevicesCertificatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FleetSid")
    public String fleetSid;
    public ListDeployedDevicesCertificatePathParams withFleetSid(String fleetSid) {
        this.fleetSid = fleetSid;
        return this;
    }
}