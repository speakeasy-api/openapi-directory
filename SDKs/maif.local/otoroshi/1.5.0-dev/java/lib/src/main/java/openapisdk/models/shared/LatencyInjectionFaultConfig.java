package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * LatencyInjectionFaultConfig
 * Config for large latency injection fault
**/
public class LatencyInjectionFaultConfig {
    @JsonProperty("from")
    public Integer from;
    public LatencyInjectionFaultConfig withFrom(Integer from) {
        this.from = from;
        return this;
    }
    @JsonProperty("ratio")
    public Double ratio;
    public LatencyInjectionFaultConfig withRatio(Double ratio) {
        this.ratio = ratio;
        return this;
    }
    @JsonProperty("to")
    public Integer to;
    public LatencyInjectionFaultConfig withTo(Integer to) {
        this.to = to;
        return this;
    }
}