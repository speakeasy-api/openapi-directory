package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTaskScanDataPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=task_id")
    public String taskId;
    public GetTaskScanDataPathParams withTaskId(String taskId) {
        this.taskId = taskId;
        return this;
    }
}