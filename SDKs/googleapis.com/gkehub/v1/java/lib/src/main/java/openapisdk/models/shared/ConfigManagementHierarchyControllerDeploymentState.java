package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConfigManagementHierarchyControllerDeploymentState
 * Deployment state for Hierarchy Controller
**/
public class ConfigManagementHierarchyControllerDeploymentState {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extension")
    public ConfigManagementHierarchyControllerDeploymentStateExtensionEnum extension;
    public ConfigManagementHierarchyControllerDeploymentState withExtension(ConfigManagementHierarchyControllerDeploymentStateExtensionEnum extension) {
        this.extension = extension;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hnc")
    public ConfigManagementHierarchyControllerDeploymentStateHncEnum hnc;
    public ConfigManagementHierarchyControllerDeploymentState withHnc(ConfigManagementHierarchyControllerDeploymentStateHncEnum hnc) {
        this.hnc = hnc;
        return this;
    }
}