package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDeployedDevicesFleetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteDeployedDevicesFleetPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}