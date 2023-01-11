package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDeployedDevicesCertificatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FleetSid")
    public String fleetSid;
    public CreateDeployedDevicesCertificatePathParams withFleetSid(String fleetSid) {
        this.fleetSid = fleetSid;
        return this;
    }
}