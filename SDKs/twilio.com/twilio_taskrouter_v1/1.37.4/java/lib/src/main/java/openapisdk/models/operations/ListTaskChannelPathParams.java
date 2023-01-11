package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTaskChannelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=WorkspaceSid")
    public String workspaceSid;
    public ListTaskChannelPathParams withWorkspaceSid(String workspaceSid) {
        this.workspaceSid = workspaceSid;
        return this;
    }
}