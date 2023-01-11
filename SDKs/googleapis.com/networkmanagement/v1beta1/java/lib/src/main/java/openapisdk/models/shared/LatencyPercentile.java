package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LatencyPercentile
 * Latency percentile rank and value.
**/
public class LatencyPercentile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latencyMicros")
    public String latencyMicros;
    public LatencyPercentile withLatencyMicros(String latencyMicros) {
        this.latencyMicros = latencyMicros;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("percent")
    public Integer percent;
    public LatencyPercentile withPercent(Integer percent) {
        this.percent = percent;
        return this;
    }
}