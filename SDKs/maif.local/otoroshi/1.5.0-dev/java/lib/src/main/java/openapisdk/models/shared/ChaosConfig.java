package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChaosConfig
 * Configuration for the faults that can be injected in requests
**/
public class ChaosConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("badResponsesFaultConfig")
    public BadResponsesFaultConfig badResponsesFaultConfig;
    public ChaosConfig withBadResponsesFaultConfig(BadResponsesFaultConfig badResponsesFaultConfig) {
        this.badResponsesFaultConfig = badResponsesFaultConfig;
        return this;
    }
    @JsonProperty("enabled")
    public Boolean enabled;
    public ChaosConfig withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("largeRequestFaultConfig")
    public LargeRequestFaultConfig largeRequestFaultConfig;
    public ChaosConfig withLargeRequestFaultConfig(LargeRequestFaultConfig largeRequestFaultConfig) {
        this.largeRequestFaultConfig = largeRequestFaultConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("largeResponseFaultConfig")
    public LargeResponseFaultConfig largeResponseFaultConfig;
    public ChaosConfig withLargeResponseFaultConfig(LargeResponseFaultConfig largeResponseFaultConfig) {
        this.largeResponseFaultConfig = largeResponseFaultConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latencyInjectionFaultConfig")
    public LatencyInjectionFaultConfig latencyInjectionFaultConfig;
    public ChaosConfig withLatencyInjectionFaultConfig(LatencyInjectionFaultConfig latencyInjectionFaultConfig) {
        this.latencyInjectionFaultConfig = latencyInjectionFaultConfig;
        return this;
    }
}