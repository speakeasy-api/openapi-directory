package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRolePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public DeleteRolePathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteRolePathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}