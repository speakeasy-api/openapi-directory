package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDeployedDevicesCertificatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FleetSid")
    public String fleetSid;
    public UpdateDeployedDevicesCertificatePathParams withFleetSid(String fleetSid) {
        this.fleetSid = fleetSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public UpdateDeployedDevicesCertificatePathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}