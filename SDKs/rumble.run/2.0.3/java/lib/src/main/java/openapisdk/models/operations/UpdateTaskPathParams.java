package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTaskPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=task_id")
    public String taskId;
    public UpdateTaskPathParams withTaskId(String taskId) {
        this.taskId = taskId;
        return this;
    }
}