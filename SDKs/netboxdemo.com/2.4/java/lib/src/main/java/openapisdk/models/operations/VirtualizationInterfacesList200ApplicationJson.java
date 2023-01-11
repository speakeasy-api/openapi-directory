package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VirtualizationInterfacesList200ApplicationJson {
    @JsonProperty("count")
    public Long count;
    public VirtualizationInterfacesList200ApplicationJson withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public VirtualizationInterfacesList200ApplicationJson withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous")
    public String previous;
    public VirtualizationInterfacesList200ApplicationJson withPrevious(String previous) {
        this.previous = previous;
        return this;
    }
    @JsonProperty("results")
    public openapisdk.models.shared.Interface[] results;
    public VirtualizationInterfacesList200ApplicationJson withResults(openapisdk.models.shared.Interface[] results) {
        this.results = results;
        return this;
    }
}