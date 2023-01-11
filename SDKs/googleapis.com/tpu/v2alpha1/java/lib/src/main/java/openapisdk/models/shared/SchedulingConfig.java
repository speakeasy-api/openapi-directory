package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SchedulingConfig
 * Sets the scheduling options for this node.
**/
public class SchedulingConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preemptible")
    public Boolean preemptible;
    public SchedulingConfig withPreemptible(Boolean preemptible) {
        this.preemptible = preemptible;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reserved")
    public Boolean reserved;
    public SchedulingConfig withReserved(Boolean reserved) {
        this.reserved = reserved;
        return this;
    }
}