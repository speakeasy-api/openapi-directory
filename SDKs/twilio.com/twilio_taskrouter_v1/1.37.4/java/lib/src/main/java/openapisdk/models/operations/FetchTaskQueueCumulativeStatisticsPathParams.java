package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchTaskQueueCumulativeStatisticsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TaskQueueSid")
    public String taskQueueSid;
    public FetchTaskQueueCumulativeStatisticsPathParams withTaskQueueSid(String taskQueueSid) {
        this.taskQueueSid = taskQueueSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=WorkspaceSid")
    public String workspaceSid;
    public FetchTaskQueueCumulativeStatisticsPathParams withWorkspaceSid(String workspaceSid) {
        this.workspaceSid = workspaceSid;
        return this;
    }
}