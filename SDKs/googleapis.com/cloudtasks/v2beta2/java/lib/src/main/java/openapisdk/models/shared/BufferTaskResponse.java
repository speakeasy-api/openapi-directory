package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BufferTaskResponse
 * Response message for BufferTask.
**/
public class BufferTaskResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("task")
    public Task task;
    public BufferTaskResponse withTask(Task task) {
        this.task = task;
        return this;
    }
}