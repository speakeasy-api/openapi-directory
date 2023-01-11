package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateWorkerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=WorkspaceSid")
    public String workspaceSid;
    public CreateWorkerPathParams withWorkspaceSid(String workspaceSid) {
        this.workspaceSid = workspaceSid;
        return this;
    }
}