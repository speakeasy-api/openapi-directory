package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConfigManagementHierarchyControllerState
 * State for Hierarchy Controller
**/
public class ConfigManagementHierarchyControllerState {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public ConfigManagementHierarchyControllerDeploymentState state;
    public ConfigManagementHierarchyControllerState withState(ConfigManagementHierarchyControllerDeploymentState state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public ConfigManagementHierarchyControllerVersion version;
    public ConfigManagementHierarchyControllerState withVersion(ConfigManagementHierarchyControllerVersion version) {
        this.version = version;
        return this;
    }
}