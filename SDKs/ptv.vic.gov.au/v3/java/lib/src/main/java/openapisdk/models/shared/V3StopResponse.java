package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class V3StopResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disruptions")
    public java.util.Map<String, V3Disruption> disruptions;
    public V3StopResponse withDisruptions(java.util.Map<String, V3Disruption> disruptions) {
        this.disruptions = disruptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public V3Status status;
    public V3StopResponse withStatus(V3Status status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stop")
    public V3StopDetails stop;
    public V3StopResponse withStop(V3StopDetails stop) {
        this.stop = stop;
        return this;
    }
}