package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AgentLocationEditRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public AgentLocationEditRequestAddress address;
    public AgentLocationEditRequest withAddress(AgentLocationEditRequestAddress address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_name")
    public String displayName;
    public AgentLocationEditRequest withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary_location")
    public Boolean primaryLocation;
    public AgentLocationEditRequest withPrimaryLocation(Boolean primaryLocation) {
        this.primaryLocation = primaryLocation;
        return this;
    }
}