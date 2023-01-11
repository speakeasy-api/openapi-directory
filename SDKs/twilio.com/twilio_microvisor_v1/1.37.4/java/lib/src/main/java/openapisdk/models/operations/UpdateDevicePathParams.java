package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDevicePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public UpdateDevicePathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}