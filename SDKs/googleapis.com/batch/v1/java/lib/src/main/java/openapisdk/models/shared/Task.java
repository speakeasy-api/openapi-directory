package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Task
 * A Cloud Batch task.
**/
public class Task {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Task withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public TaskStatus status;
    public Task withStatus(TaskStatus status) {
        this.status = status;
        return this;
    }
}