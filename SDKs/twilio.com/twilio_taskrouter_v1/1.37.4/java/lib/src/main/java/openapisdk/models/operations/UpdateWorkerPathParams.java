package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateWorkerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public UpdateWorkerPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=WorkspaceSid")
    public String workspaceSid;
    public UpdateWorkerPathParams withWorkspaceSid(String workspaceSid) {
        this.workspaceSid = workspaceSid;
        return this;
    }
}