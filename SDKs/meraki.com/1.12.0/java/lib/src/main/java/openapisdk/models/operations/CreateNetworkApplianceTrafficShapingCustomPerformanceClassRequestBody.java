package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxJitter")
    public Long maxJitter;
    public CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody withMaxJitter(Long maxJitter) {
        this.maxJitter = maxJitter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxLatency")
    public Long maxLatency;
    public CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody withMaxLatency(Long maxLatency) {
        this.maxLatency = maxLatency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxLossPercentage")
    public Long maxLossPercentage;
    public CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody withMaxLossPercentage(Long maxLossPercentage) {
        this.maxLossPercentage = maxLossPercentage;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody withName(String name) {
        this.name = name;
        return this;
    }
}