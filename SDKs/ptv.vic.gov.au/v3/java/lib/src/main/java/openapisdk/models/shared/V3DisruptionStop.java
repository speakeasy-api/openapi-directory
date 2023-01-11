package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class V3DisruptionStop {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stop_id")
    public Integer stopId;
    public V3DisruptionStop withStopId(Integer stopId) {
        this.stopId = stopId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stop_name")
    public String stopName;
    public V3DisruptionStop withStopName(String stopName) {
        this.stopName = stopName;
        return this;
    }
}