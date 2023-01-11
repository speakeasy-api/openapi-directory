package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchDeployedDevicesFleetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchDeployedDevicesFleetPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}