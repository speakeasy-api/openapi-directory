package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListTaskQueueListTaskQueueResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListTaskQueueListTaskQueueResponseMeta meta;
    public ListTaskQueueListTaskQueueResponse withMeta(ListTaskQueueListTaskQueueResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("task_queues")
    public openapisdk.models.shared.TaskrouterV1WorkspaceTaskQueue[] taskQueues;
    public ListTaskQueueListTaskQueueResponse withTaskQueues(openapisdk.models.shared.TaskrouterV1WorkspaceTaskQueue[] taskQueues) {
        this.taskQueues = taskQueues;
        return this;
    }
}