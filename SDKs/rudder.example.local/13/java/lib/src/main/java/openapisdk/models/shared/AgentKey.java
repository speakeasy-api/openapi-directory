package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AgentKey
 * Information about agent key or certificate
**/
public class AgentKey {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public AgentKeyStatusEnum status;
    public AgentKey withStatus(AgentKeyStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("value")
    public String value;
    public AgentKey withValue(String value) {
        this.value = value;
        return this;
    }
}