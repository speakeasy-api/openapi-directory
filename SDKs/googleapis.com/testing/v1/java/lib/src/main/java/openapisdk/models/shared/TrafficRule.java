package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TrafficRule
 * Network emulation parameters.
**/
public class TrafficRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bandwidth")
    public Float bandwidth;
    public TrafficRule withBandwidth(Float bandwidth) {
        this.bandwidth = bandwidth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("burst")
    public Float burst;
    public TrafficRule withBurst(Float burst) {
        this.burst = burst;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delay")
    public String delay;
    public TrafficRule withDelay(String delay) {
        this.delay = delay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("packetDuplicationRatio")
    public Float packetDuplicationRatio;
    public TrafficRule withPacketDuplicationRatio(Float packetDuplicationRatio) {
        this.packetDuplicationRatio = packetDuplicationRatio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("packetLossRatio")
    public Float packetLossRatio;
    public TrafficRule withPacketLossRatio(Float packetLossRatio) {
        this.packetLossRatio = packetLossRatio;
        return this;
    }
}