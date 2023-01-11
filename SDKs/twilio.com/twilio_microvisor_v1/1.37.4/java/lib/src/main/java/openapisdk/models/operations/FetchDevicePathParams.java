package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchDevicePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchDevicePathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}