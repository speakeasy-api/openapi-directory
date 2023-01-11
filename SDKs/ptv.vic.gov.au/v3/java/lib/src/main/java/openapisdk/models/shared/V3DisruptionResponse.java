package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class V3DisruptionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disruption")
    public V3Disruption disruption;
    public V3DisruptionResponse withDisruption(V3Disruption disruption) {
        this.disruption = disruption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public V3Status status;
    public V3DisruptionResponse withStatus(V3Status status) {
        this.status = status;
        return this;
    }
}