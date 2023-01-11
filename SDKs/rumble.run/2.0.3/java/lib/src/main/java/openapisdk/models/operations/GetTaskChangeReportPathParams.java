package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTaskChangeReportPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=task_id")
    public String taskId;
    public GetTaskChangeReportPathParams withTaskId(String taskId) {
        this.taskId = taskId;
        return this;
    }
}