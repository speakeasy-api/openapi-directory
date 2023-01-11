package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Connection
 * Connection represents an instance of connector.
**/
public class Connection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authConfig")
    public AuthConfig authConfig;
    public Connection withAuthConfig(AuthConfig authConfig) {
        this.authConfig = authConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configVariables")
    public ConfigVariable[] configVariables;
    public Connection withConfigVariables(ConfigVariable[] configVariables) {
        this.configVariables = configVariables;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectorVersion")
    public String connectorVersion;
    public Connection withConnectorVersion(String connectorVersion) {
        this.connectorVersion = connectorVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public Connection withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Connection withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationConfigs")
    public DestinationConfig[] destinationConfigs;
    public Connection withDestinationConfigs(DestinationConfig[] destinationConfigs) {
        this.destinationConfigs = destinationConfigs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("envoyImageLocation")
    public String envoyImageLocation;
    public Connection withEnvoyImageLocation(String envoyImageLocation) {
        this.envoyImageLocation = envoyImageLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageLocation")
    public String imageLocation;
    public Connection withImageLocation(String imageLocation) {
        this.imageLocation = imageLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public Connection withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lockConfig")
    public LockConfig lockConfig;
    public Connection withLockConfig(LockConfig lockConfig) {
        this.lockConfig = lockConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Connection withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nodeConfig")
    public NodeConfig nodeConfig;
    public Connection withNodeConfig(NodeConfig nodeConfig) {
        this.nodeConfig = nodeConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccount")
    public String serviceAccount;
    public Connection withServiceAccount(String serviceAccount) {
        this.serviceAccount = serviceAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceDirectory")
    public String serviceDirectory;
    public Connection withServiceDirectory(String serviceDirectory) {
        this.serviceDirectory = serviceDirectory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ConnectionStatus status;
    public Connection withStatus(ConnectionStatus status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suspended")
    public Boolean suspended;
    public Connection withSuspended(Boolean suspended) {
        this.suspended = suspended;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public Connection withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}