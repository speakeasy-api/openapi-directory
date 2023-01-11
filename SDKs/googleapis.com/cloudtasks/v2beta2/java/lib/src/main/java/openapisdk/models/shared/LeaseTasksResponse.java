package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LeaseTasksResponse
 * Response message for leasing tasks using LeaseTasks.
**/
public class LeaseTasksResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tasks")
    public Task[] tasks;
    public LeaseTasksResponse withTasks(Task[] tasks) {
        this.tasks = tasks;
        return this;
    }
}