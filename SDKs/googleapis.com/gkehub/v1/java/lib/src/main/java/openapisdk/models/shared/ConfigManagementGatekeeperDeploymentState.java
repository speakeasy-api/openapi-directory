package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConfigManagementGatekeeperDeploymentState
 * State of Policy Controller installation.
**/
public class ConfigManagementGatekeeperDeploymentState {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gatekeeperAudit")
    public ConfigManagementGatekeeperDeploymentStateGatekeeperAuditEnum gatekeeperAudit;
    public ConfigManagementGatekeeperDeploymentState withGatekeeperAudit(ConfigManagementGatekeeperDeploymentStateGatekeeperAuditEnum gatekeeperAudit) {
        this.gatekeeperAudit = gatekeeperAudit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gatekeeperControllerManagerState")
    public ConfigManagementGatekeeperDeploymentStateGatekeeperControllerManagerStateEnum gatekeeperControllerManagerState;
    public ConfigManagementGatekeeperDeploymentState withGatekeeperControllerManagerState(ConfigManagementGatekeeperDeploymentStateGatekeeperControllerManagerStateEnum gatekeeperControllerManagerState) {
        this.gatekeeperControllerManagerState = gatekeeperControllerManagerState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gatekeeperMutation")
    public ConfigManagementGatekeeperDeploymentStateGatekeeperMutationEnum gatekeeperMutation;
    public ConfigManagementGatekeeperDeploymentState withGatekeeperMutation(ConfigManagementGatekeeperDeploymentStateGatekeeperMutationEnum gatekeeperMutation) {
        this.gatekeeperMutation = gatekeeperMutation;
        return this;
    }
}