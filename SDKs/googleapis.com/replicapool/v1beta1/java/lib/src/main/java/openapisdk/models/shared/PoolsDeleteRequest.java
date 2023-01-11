package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PoolsDeleteRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("abandonInstances")
    public String[] abandonInstances;
    public PoolsDeleteRequest withAbandonInstances(String[] abandonInstances) {
        this.abandonInstances = abandonInstances;
        return this;
    }
}