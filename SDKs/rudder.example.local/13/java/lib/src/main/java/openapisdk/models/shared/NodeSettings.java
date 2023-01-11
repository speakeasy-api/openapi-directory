package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NodeSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("agentKey")
    public AgentKey agentKey;
    public NodeSettings withAgentKey(AgentKey agentKey) {
        this.agentKey = agentKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policyMode")
    public NodeSettingsPolicyModeEnum policyMode;
    public NodeSettings withPolicyMode(NodeSettingsPolicyModeEnum policyMode) {
        this.policyMode = policyMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public NodeSettingsProperties[] properties;
    public NodeSettings withProperties(NodeSettingsProperties[] properties) {
        this.properties = properties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public NodeSettingsStateEnum state;
    public NodeSettings withState(NodeSettingsStateEnum state) {
        this.state = state;
        return this;
    }
}