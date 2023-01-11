package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchTaskQueueRealTimeStatisticsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TaskQueueSid")
    public String taskQueueSid;
    public FetchTaskQueueRealTimeStatisticsPathParams withTaskQueueSid(String taskQueueSid) {
        this.taskQueueSid = taskQueueSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=WorkspaceSid")
    public String workspaceSid;
    public FetchTaskQueueRealTimeStatisticsPathParams withWorkspaceSid(String workspaceSid) {
        this.workspaceSid = workspaceSid;
        return this;
    }
}