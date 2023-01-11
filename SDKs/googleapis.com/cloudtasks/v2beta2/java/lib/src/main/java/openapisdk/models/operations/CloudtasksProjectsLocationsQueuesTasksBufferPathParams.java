package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudtasksProjectsLocationsQueuesTasksBufferPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=queue")
    public String queue;
    public CloudtasksProjectsLocationsQueuesTasksBufferPathParams withQueue(String queue) {
        this.queue = queue;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=taskId")
    public String taskId;
    public CloudtasksProjectsLocationsQueuesTasksBufferPathParams withTaskId(String taskId) {
        this.taskId = taskId;
        return this;
    }
}