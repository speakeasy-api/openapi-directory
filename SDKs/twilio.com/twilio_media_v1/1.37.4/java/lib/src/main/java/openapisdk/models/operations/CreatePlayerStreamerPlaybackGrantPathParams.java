package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePlayerStreamerPlaybackGrantPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public CreatePlayerStreamerPlaybackGrantPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}