package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRunV2ListTasksResponse
 * Response message containing a list of Tasks.
**/
public class GoogleCloudRunV2ListTasksResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudRunV2ListTasksResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tasks")
    public GoogleCloudRunV2Task[] tasks;
    public GoogleCloudRunV2ListTasksResponse withTasks(GoogleCloudRunV2Task[] tasks) {
        this.tasks = tasks;
        return this;
    }
}