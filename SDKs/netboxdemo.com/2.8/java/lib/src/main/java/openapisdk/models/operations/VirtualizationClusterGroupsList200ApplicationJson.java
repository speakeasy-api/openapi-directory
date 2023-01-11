package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VirtualizationClusterGroupsList200ApplicationJson {
    @JsonProperty("count")
    public Long count;
    public VirtualizationClusterGroupsList200ApplicationJson withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public VirtualizationClusterGroupsList200ApplicationJson withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous")
    public String previous;
    public VirtualizationClusterGroupsList200ApplicationJson withPrevious(String previous) {
        this.previous = previous;
        return this;
    }
    @JsonProperty("results")
    public openapisdk.models.shared.ClusterGroup[] results;
    public VirtualizationClusterGroupsList200ApplicationJson withResults(openapisdk.models.shared.ClusterGroup[] results) {
        this.results = results;
        return this;
    }
}