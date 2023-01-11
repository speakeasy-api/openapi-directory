package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class HideTaskPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=task_id")
    public String taskId;
    public HideTaskPathParams withTaskId(String taskId) {
        this.taskId = taskId;
        return this;
    }
}