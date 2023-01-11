package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTestUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public UpdateTestUserPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}