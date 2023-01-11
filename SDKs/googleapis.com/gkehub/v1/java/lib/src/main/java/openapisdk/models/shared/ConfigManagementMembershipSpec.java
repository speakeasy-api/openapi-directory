package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConfigManagementMembershipSpec
 * **Anthos Config Management**: Configuration for a single cluster. Intended to parallel the ConfigManagement CR.
**/
public class ConfigManagementMembershipSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configSync")
    public ConfigManagementConfigSync configSync;
    public ConfigManagementMembershipSpec withConfigSync(ConfigManagementConfigSync configSync) {
        this.configSync = configSync;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hierarchyController")
    public ConfigManagementHierarchyControllerConfig hierarchyController;
    public ConfigManagementMembershipSpec withHierarchyController(ConfigManagementHierarchyControllerConfig hierarchyController) {
        this.hierarchyController = hierarchyController;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policyController")
    public ConfigManagementPolicyController policyController;
    public ConfigManagementMembershipSpec withPolicyController(ConfigManagementPolicyController policyController) {
        this.policyController = policyController;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public ConfigManagementMembershipSpec withVersion(String version) {
        this.version = version;
        return this;
    }
}