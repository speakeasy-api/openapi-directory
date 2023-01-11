package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AgentLocationResult {
    @JsonProperty("address")
    public AgentLocationResultAddress address;
    public AgentLocationResult withAddress(AgentLocationResultAddress address) {
        this.address = address;
        return this;
    }
    @JsonProperty("agent_id")
    public String agentId;
    public AgentLocationResult withAgentId(String agentId) {
        this.agentId = agentId;
        return this;
    }
    @JsonProperty("created")
    public Long created;
    public AgentLocationResult withCreated(Long created) {
        this.created = created;
        return this;
    }
    @JsonProperty("display_name")
    public String displayName;
    public AgentLocationResult withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public AgentLocationResult withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("modified")
    public Long modified;
    public AgentLocationResult withModified(Long modified) {
        this.modified = modified;
        return this;
    }
    @JsonProperty("primary_location")
    public Boolean primaryLocation;
    public AgentLocationResult withPrimaryLocation(Boolean primaryLocation) {
        this.primaryLocation = primaryLocation;
        return this;
    }
    @JsonProperty("version")
    public String version;
    public AgentLocationResult withVersion(String version) {
        this.version = version;
        return this;
    }
}