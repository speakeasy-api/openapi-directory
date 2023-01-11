package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopTaskPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=task_id")
    public String taskId;
    public StopTaskPathParams withTaskId(String taskId) {
        this.taskId = taskId;
        return this;
    }
}