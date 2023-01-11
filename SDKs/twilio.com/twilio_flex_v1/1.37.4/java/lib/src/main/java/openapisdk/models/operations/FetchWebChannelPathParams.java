package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchWebChannelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchWebChannelPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}