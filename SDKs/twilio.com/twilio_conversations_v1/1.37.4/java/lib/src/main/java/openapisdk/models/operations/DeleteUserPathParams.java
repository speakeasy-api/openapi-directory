package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteUserPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}