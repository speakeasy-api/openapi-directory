package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConfigManagementMembershipState
 * **Anthos Config Management**: State for a single cluster.
**/
public class ConfigManagementMembershipState {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("binauthzState")
    public ConfigManagementBinauthzState binauthzState;
    public ConfigManagementMembershipState withBinauthzState(ConfigManagementBinauthzState binauthzState) {
        this.binauthzState = binauthzState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clusterName")
    public String clusterName;
    public ConfigManagementMembershipState withClusterName(String clusterName) {
        this.clusterName = clusterName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configSyncState")
    public ConfigManagementConfigSyncState configSyncState;
    public ConfigManagementMembershipState withConfigSyncState(ConfigManagementConfigSyncState configSyncState) {
        this.configSyncState = configSyncState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hierarchyControllerState")
    public ConfigManagementHierarchyControllerState hierarchyControllerState;
    public ConfigManagementMembershipState withHierarchyControllerState(ConfigManagementHierarchyControllerState hierarchyControllerState) {
        this.hierarchyControllerState = hierarchyControllerState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("membershipSpec")
    public ConfigManagementMembershipSpec membershipSpec;
    public ConfigManagementMembershipState withMembershipSpec(ConfigManagementMembershipSpec membershipSpec) {
        this.membershipSpec = membershipSpec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operatorState")
    public ConfigManagementOperatorState operatorState;
    public ConfigManagementMembershipState withOperatorState(ConfigManagementOperatorState operatorState) {
        this.operatorState = operatorState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policyControllerState")
    public ConfigManagementPolicyControllerState policyControllerState;
    public ConfigManagementMembershipState withPolicyControllerState(ConfigManagementPolicyControllerState policyControllerState) {
        this.policyControllerState = policyControllerState;
        return this;
    }
}