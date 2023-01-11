package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchTaskQueueStatisticsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TaskQueueSid")
    public String taskQueueSid;
    public FetchTaskQueueStatisticsPathParams withTaskQueueSid(String taskQueueSid) {
        this.taskQueueSid = taskQueueSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=WorkspaceSid")
    public String workspaceSid;
    public FetchTaskQueueStatisticsPathParams withWorkspaceSid(String workspaceSid) {
        this.workspaceSid = workspaceSid;
        return this;
    }
}