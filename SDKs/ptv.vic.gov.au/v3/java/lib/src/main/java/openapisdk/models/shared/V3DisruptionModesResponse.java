package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class V3DisruptionModesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disruption_modes")
    public V3DisruptionMode[] disruptionModes;
    public V3DisruptionModesResponse withDisruptionModes(V3DisruptionMode[] disruptionModes) {
        this.disruptionModes = disruptionModes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public V3Status status;
    public V3DisruptionModesResponse withStatus(V3Status status) {
        this.status = status;
        return this;
    }
}