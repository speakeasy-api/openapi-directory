package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConfigManagementConfigSyncState
 * State information for ConfigSync
**/
public class ConfigManagementConfigSyncState {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploymentState")
    public ConfigManagementConfigSyncDeploymentState deploymentState;
    public ConfigManagementConfigSyncState withDeploymentState(ConfigManagementConfigSyncDeploymentState deploymentState) {
        this.deploymentState = deploymentState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("syncState")
    public ConfigManagementSyncState syncState;
    public ConfigManagementConfigSyncState withSyncState(ConfigManagementSyncState syncState) {
        this.syncState = syncState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public ConfigManagementConfigSyncVersion version;
    public ConfigManagementConfigSyncState withVersion(ConfigManagementConfigSyncVersion version) {
        this.version = version;
        return this;
    }
}