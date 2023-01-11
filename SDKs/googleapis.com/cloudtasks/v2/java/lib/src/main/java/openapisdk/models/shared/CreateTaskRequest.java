package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateTaskRequest
 * Request message for CreateTask.
**/
public class CreateTaskRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseView")
    public CreateTaskRequestResponseViewEnum responseView;
    public CreateTaskRequest withResponseView(CreateTaskRequestResponseViewEnum responseView) {
        this.responseView = responseView;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("task")
    public Task task;
    public CreateTaskRequest withTask(Task task) {
        this.task = task;
        return this;
    }
}