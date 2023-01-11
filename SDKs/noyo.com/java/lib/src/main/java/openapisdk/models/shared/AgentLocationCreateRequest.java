package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AgentLocationCreateRequest {
    @JsonProperty("address")
    public AgentLocationCreateRequestAddress address;
    public AgentLocationCreateRequest withAddress(AgentLocationCreateRequestAddress address) {
        this.address = address;
        return this;
    }
    @JsonProperty("display_name")
    public String displayName;
    public AgentLocationCreateRequest withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonProperty("primary_location")
    public Boolean primaryLocation;
    public AgentLocationCreateRequest withPrimaryLocation(Boolean primaryLocation) {
        this.primaryLocation = primaryLocation;
        return this;
    }
}