package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConnectionInput
 * Connection represents an instance of connector.
**/
public class ConnectionInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authConfig")
    public AuthConfig authConfig;
    public ConnectionInput withAuthConfig(AuthConfig authConfig) {
        this.authConfig = authConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configVariables")
    public ConfigVariable[] configVariables;
    public ConnectionInput withConfigVariables(ConfigVariable[] configVariables) {
        this.configVariables = configVariables;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectorVersion")
    public String connectorVersion;
    public ConnectionInput withConnectorVersion(String connectorVersion) {
        this.connectorVersion = connectorVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ConnectionInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationConfigs")
    public DestinationConfig[] destinationConfigs;
    public ConnectionInput withDestinationConfigs(DestinationConfig[] destinationConfigs) {
        this.destinationConfigs = destinationConfigs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public ConnectionInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lockConfig")
    public LockConfig lockConfig;
    public ConnectionInput withLockConfig(LockConfig lockConfig) {
        this.lockConfig = lockConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nodeConfig")
    public NodeConfig nodeConfig;
    public ConnectionInput withNodeConfig(NodeConfig nodeConfig) {
        this.nodeConfig = nodeConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccount")
    public String serviceAccount;
    public ConnectionInput withServiceAccount(String serviceAccount) {
        this.serviceAccount = serviceAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ConnectionStatus status;
    public ConnectionInput withStatus(ConnectionStatus status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suspended")
    public Boolean suspended;
    public ConnectionInput withSuspended(Boolean suspended) {
        this.suspended = suspended;
        return this;
    }
}