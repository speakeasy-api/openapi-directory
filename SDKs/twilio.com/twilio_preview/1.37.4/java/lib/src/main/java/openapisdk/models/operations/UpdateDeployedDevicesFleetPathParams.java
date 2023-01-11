package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDeployedDevicesFleetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public UpdateDeployedDevicesFleetPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}