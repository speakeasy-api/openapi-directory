package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PolicyControllerMembershipState
 * **Policy Controller**: State for a single cluster.
**/
public class PolicyControllerMembershipState {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("componentStates")
    public java.util.Map<String, PolicyControllerOnClusterState> componentStates;
    public PolicyControllerMembershipState withComponentStates(java.util.Map<String, PolicyControllerOnClusterState> componentStates) {
        this.componentStates = componentStates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public PolicyControllerMembershipStateStateEnum state;
    public PolicyControllerMembershipState withState(PolicyControllerMembershipStateStateEnum state) {
        this.state = state;
        return this;
    }
}