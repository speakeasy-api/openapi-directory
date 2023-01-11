package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListUnderstandTaskListUnderstandTaskResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListUnderstandTaskListUnderstandTaskResponseMeta meta;
    public ListUnderstandTaskListUnderstandTaskResponse withMeta(ListUnderstandTaskListUnderstandTaskResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tasks")
    public openapisdk.models.shared.PreviewUnderstandAssistantTask[] tasks;
    public ListUnderstandTaskListUnderstandTaskResponse withTasks(openapisdk.models.shared.PreviewUnderstandAssistantTask[] tasks) {
        this.tasks = tasks;
        return this;
    }
}