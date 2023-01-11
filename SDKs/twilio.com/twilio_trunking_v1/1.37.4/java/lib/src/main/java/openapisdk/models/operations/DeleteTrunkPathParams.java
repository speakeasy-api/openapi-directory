package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteTrunkPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteTrunkPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}