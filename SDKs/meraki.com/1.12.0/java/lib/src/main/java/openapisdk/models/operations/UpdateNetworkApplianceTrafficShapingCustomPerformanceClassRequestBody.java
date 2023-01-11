package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxJitter")
    public Long maxJitter;
    public UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody withMaxJitter(Long maxJitter) {
        this.maxJitter = maxJitter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxLatency")
    public Long maxLatency;
    public UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody withMaxLatency(Long maxLatency) {
        this.maxLatency = maxLatency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxLossPercentage")
    public Long maxLossPercentage;
    public UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody withMaxLossPercentage(Long maxLossPercentage) {
        this.maxLossPercentage = maxLossPercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody withName(String name) {
        this.name = name;
        return this;
    }
}