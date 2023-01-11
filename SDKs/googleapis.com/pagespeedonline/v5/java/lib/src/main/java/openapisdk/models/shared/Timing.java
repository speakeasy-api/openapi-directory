package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Timing
 * Message containing the performance timing data for the Lighthouse run.
**/
public class Timing {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Double total;
    public Timing withTotal(Double total) {
        this.total = total;
        return this;
    }
}