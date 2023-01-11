package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTaskPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=WorkspaceSid")
    public String workspaceSid;
    public CreateTaskPathParams withWorkspaceSid(String workspaceSid) {
        this.workspaceSid = workspaceSid;
        return this;
    }
}