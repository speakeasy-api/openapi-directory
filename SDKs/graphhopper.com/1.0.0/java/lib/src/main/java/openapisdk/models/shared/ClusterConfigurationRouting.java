package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ClusterConfigurationRouting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cost_per_meter")
    public Double costPerMeter;
    public ClusterConfigurationRouting withCostPerMeter(Double costPerMeter) {
        this.costPerMeter = costPerMeter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cost_per_second")
    public Double costPerSecond;
    public ClusterConfigurationRouting withCostPerSecond(Double costPerSecond) {
        this.costPerSecond = costPerSecond;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profile")
    public String profile;
    public ClusterConfigurationRouting withProfile(String profile) {
        this.profile = profile;
        return this;
    }
}