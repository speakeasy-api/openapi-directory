package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConfigManagementOperatorState
 * State information for an ACM's Operator
**/
public class ConfigManagementOperatorState {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploymentState")
    public ConfigManagementOperatorStateDeploymentStateEnum deploymentState;
    public ConfigManagementOperatorState withDeploymentState(ConfigManagementOperatorStateDeploymentStateEnum deploymentState) {
        this.deploymentState = deploymentState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public ConfigManagementInstallError[] errors;
    public ConfigManagementOperatorState withErrors(ConfigManagementInstallError[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public ConfigManagementOperatorState withVersion(String version) {
        this.version = version;
        return this;
    }
}