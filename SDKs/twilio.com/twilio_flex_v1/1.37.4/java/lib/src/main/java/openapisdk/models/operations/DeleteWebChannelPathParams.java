package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteWebChannelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteWebChannelPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}