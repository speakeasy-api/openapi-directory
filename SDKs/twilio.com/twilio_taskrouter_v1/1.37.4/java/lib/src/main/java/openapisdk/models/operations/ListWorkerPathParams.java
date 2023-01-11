package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListWorkerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=WorkspaceSid")
    public String workspaceSid;
    public ListWorkerPathParams withWorkspaceSid(String workspaceSid) {
        this.workspaceSid = workspaceSid;
        return this;
    }
}