package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRolePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public UpdateRolePathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}