package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchWorkerStatisticsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=WorkspaceSid")
    public String workspaceSid;
    public FetchWorkerStatisticsPathParams withWorkspaceSid(String workspaceSid) {
        this.workspaceSid = workspaceSid;
        return this;
    }
}