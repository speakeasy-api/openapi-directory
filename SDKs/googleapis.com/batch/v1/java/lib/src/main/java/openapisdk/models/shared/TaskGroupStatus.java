package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TaskGroupStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("counts")
    public java.util.Map<String, String> counts;
    public TaskGroupStatus withCounts(java.util.Map<String, String> counts) {
        this.counts = counts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instances")
    public InstanceStatus[] instances;
    public TaskGroupStatus withInstances(InstanceStatus[] instances) {
        this.instances = instances;
        return this;
    }
}