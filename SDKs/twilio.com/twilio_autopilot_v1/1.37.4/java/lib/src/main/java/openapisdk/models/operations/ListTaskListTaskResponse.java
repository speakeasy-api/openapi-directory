package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListTaskListTaskResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListTaskListTaskResponseMeta meta;
    public ListTaskListTaskResponse withMeta(ListTaskListTaskResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tasks")
    public openapisdk.models.shared.AutopilotV1AssistantTask[] tasks;
    public ListTaskListTaskResponse withTasks(openapisdk.models.shared.AutopilotV1AssistantTask[] tasks) {
        this.tasks = tasks;
        return this;
    }
}