package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTaskQueuesStatisticsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=WorkspaceSid")
    public String workspaceSid;
    public ListTaskQueuesStatisticsPathParams withWorkspaceSid(String workspaceSid) {
        this.workspaceSid = workspaceSid;
        return this;
    }
}