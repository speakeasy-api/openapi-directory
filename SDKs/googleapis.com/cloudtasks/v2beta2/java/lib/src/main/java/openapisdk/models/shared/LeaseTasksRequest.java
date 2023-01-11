package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LeaseTasksRequest
 * Request message for leasing tasks using LeaseTasks.
**/
public class LeaseTasksRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter")
    public String filter;
    public LeaseTasksRequest withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("leaseDuration")
    public String leaseDuration;
    public LeaseTasksRequest withLeaseDuration(String leaseDuration) {
        this.leaseDuration = leaseDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxTasks")
    public Integer maxTasks;
    public LeaseTasksRequest withMaxTasks(Integer maxTasks) {
        this.maxTasks = maxTasks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseView")
    public LeaseTasksRequestResponseViewEnum responseView;
    public LeaseTasksRequest withResponseView(LeaseTasksRequestResponseViewEnum responseView) {
        this.responseView = responseView;
        return this;
    }
}