package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ExtrasRecentActivityList200ApplicationJson {
    @JsonProperty("count")
    public Long count;
    public ExtrasRecentActivityList200ApplicationJson withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public ExtrasRecentActivityList200ApplicationJson withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous")
    public String previous;
    public ExtrasRecentActivityList200ApplicationJson withPrevious(String previous) {
        this.previous = previous;
        return this;
    }
    @JsonProperty("results")
    public openapisdk.models.shared.UserAction[] results;
    public ExtrasRecentActivityList200ApplicationJson withResults(openapisdk.models.shared.UserAction[] results) {
        this.results = results;
        return this;
    }
}