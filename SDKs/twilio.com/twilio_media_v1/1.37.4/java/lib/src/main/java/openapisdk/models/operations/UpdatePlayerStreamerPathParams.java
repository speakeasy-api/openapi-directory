package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePlayerStreamerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public UpdatePlayerStreamerPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}