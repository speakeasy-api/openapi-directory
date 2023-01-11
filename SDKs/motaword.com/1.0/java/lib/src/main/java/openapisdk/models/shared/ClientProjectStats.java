package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ClientProjectStats {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stats")
    public ClientProjectStat[] stats;
    public ClientProjectStats withStats(ClientProjectStat[] stats) {
        this.stats = stats;
        return this;
    }
}