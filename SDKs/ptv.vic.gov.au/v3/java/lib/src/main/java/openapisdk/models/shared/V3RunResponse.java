package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class V3RunResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("run")
    public V3Run run;
    public V3RunResponse withRun(V3Run run) {
        this.run = run;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public V3Status status;
    public V3RunResponse withStatus(V3Status status) {
        this.status = status;
        return this;
    }
}