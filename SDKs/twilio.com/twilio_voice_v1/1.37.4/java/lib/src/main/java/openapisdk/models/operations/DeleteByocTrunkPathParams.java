package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteByocTrunkPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteByocTrunkPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}