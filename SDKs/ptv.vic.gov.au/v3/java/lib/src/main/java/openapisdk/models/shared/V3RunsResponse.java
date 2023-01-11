package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class V3RunsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runs")
    public V3Run[] runs;
    public V3RunsResponse withRuns(V3Run[] runs) {
        this.runs = runs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public V3Status status;
    public V3RunsResponse withStatus(V3Status status) {
        this.status = status;
        return this;
    }
}