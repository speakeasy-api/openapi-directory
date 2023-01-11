package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConfigManagementPolicyControllerState
 * State for PolicyControllerState.
**/
public class ConfigManagementPolicyControllerState {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploymentState")
    public ConfigManagementGatekeeperDeploymentState deploymentState;
    public ConfigManagementPolicyControllerState withDeploymentState(ConfigManagementGatekeeperDeploymentState deploymentState) {
        this.deploymentState = deploymentState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public ConfigManagementPolicyControllerVersion version;
    public ConfigManagementPolicyControllerState withVersion(ConfigManagementPolicyControllerVersion version) {
        this.version = version;
        return this;
    }
}