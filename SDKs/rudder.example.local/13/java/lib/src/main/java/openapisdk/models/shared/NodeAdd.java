package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NodeAdd {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("agentKey")
    public AgentKey agentKey;
    public NodeAdd withAgentKey(AgentKey agentKey) {
        this.agentKey = agentKey;
        return this;
    }
    @JsonProperty("hostname")
    public String hostname;
    public NodeAdd withHostname(String hostname) {
        this.hostname = hostname;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public NodeAdd withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("ipAddresses")
    public String[] ipAddresses;
    public NodeAdd withIpAddresses(String[] ipAddresses) {
        this.ipAddresses = ipAddresses;
        return this;
    }
    @JsonProperty("machineType")
    public NodeAddMachineTypeEnum machineType;
    public NodeAdd withMachineType(NodeAddMachineTypeEnum machineType) {
        this.machineType = machineType;
        return this;
    }
    @JsonProperty("os")
    public Os os;
    public NodeAdd withOs(Os os) {
        this.os = os;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policyMode")
    public NodeAddPolicyModeEnum policyMode;
    public NodeAdd withPolicyMode(NodeAddPolicyModeEnum policyMode) {
        this.policyMode = policyMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policyServerId")
    public String policyServerId;
    public NodeAdd withPolicyServerId(String policyServerId) {
        this.policyServerId = policyServerId;
        return this;
    }
    @JsonProperty("properties")
    public NodeAddProperties properties;
    public NodeAdd withProperties(NodeAddProperties properties) {
        this.properties = properties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public NodeAddStateEnum state;
    public NodeAdd withState(NodeAddStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonProperty("status")
    public NodeAddStatusEnum status;
    public NodeAdd withStatus(NodeAddStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timezone")
    public Timezone timezone;
    public NodeAdd withTimezone(Timezone timezone) {
        this.timezone = timezone;
        return this;
    }
}