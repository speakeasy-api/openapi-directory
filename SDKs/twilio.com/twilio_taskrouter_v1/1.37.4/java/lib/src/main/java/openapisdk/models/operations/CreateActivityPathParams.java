package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateActivityPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=WorkspaceSid")
    public String workspaceSid;
    public CreateActivityPathParams withWorkspaceSid(String workspaceSid) {
        this.workspaceSid = workspaceSid;
        return this;
    }
}