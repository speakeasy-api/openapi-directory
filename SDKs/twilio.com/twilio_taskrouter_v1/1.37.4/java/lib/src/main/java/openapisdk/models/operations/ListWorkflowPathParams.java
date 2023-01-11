package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListWorkflowPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=WorkspaceSid")
    public String workspaceSid;
    public ListWorkflowPathParams withWorkspaceSid(String workspaceSid) {
        this.workspaceSid = workspaceSid;
        return this;
    }
}