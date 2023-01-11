package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrderServiceOffering200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("task_id")
    public String taskId;
    public OrderServiceOffering200ApplicationJson withTaskId(String taskId) {
        this.taskId = taskId;
        return this;
    }
}