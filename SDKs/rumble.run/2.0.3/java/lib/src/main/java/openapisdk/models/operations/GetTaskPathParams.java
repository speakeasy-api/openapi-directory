package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTaskPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=task_id")
    public String taskId;
    public GetTaskPathParams withTaskId(String taskId) {
        this.taskId = taskId;
        return this;
    }
}