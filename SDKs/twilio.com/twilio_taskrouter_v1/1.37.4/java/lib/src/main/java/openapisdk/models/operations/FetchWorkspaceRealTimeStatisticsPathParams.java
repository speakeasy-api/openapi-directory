package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchWorkspaceRealTimeStatisticsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=WorkspaceSid")
    public String workspaceSid;
    public FetchWorkspaceRealTimeStatisticsPathParams withWorkspaceSid(String workspaceSid) {
        this.workspaceSid = workspaceSid;
        return this;
    }
}