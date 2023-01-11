package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRolePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteRolePathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}