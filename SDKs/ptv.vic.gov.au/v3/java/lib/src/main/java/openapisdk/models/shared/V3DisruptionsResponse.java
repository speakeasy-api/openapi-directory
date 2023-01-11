package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class V3DisruptionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disruptions")
    public V3Disruptions disruptions;
    public V3DisruptionsResponse withDisruptions(V3Disruptions disruptions) {
        this.disruptions = disruptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public V3Status status;
    public V3DisruptionsResponse withStatus(V3Status status) {
        this.status = status;
        return this;
    }
}