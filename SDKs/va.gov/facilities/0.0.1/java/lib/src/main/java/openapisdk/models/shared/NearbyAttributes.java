package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class NearbyAttributes {
    @JsonProperty("max_time")
    public Integer maxTime;
    public NearbyAttributes withMaxTime(Integer maxTime) {
        this.maxTime = maxTime;
        return this;
    }
    @JsonProperty("min_time")
    public Integer minTime;
    public NearbyAttributes withMinTime(Integer minTime) {
        this.minTime = minTime;
        return this;
    }
}