package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchDeployedDevicesCertificatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FleetSid")
    public String fleetSid;
    public FetchDeployedDevicesCertificatePathParams withFleetSid(String fleetSid) {
        this.fleetSid = fleetSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchDeployedDevicesCertificatePathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}