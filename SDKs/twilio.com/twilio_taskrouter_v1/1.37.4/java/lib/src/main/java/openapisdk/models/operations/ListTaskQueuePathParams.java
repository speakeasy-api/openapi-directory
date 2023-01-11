package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTaskQueuePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=WorkspaceSid")
    public String workspaceSid;
    public ListTaskQueuePathParams withWorkspaceSid(String workspaceSid) {
        this.workspaceSid = workspaceSid;
        return this;
    }
}