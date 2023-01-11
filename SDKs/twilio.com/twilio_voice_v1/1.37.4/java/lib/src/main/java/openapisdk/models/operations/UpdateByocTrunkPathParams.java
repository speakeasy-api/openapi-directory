package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateByocTrunkPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public UpdateByocTrunkPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}