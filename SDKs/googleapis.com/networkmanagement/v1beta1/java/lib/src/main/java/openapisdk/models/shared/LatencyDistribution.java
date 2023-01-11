package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LatencyDistribution
 * Describes measured latency distribution.
**/
public class LatencyDistribution {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latencyPercentiles")
    public LatencyPercentile[] latencyPercentiles;
    public LatencyDistribution withLatencyPercentiles(LatencyPercentile[] latencyPercentiles) {
        this.latencyPercentiles = latencyPercentiles;
        return this;
    }
}