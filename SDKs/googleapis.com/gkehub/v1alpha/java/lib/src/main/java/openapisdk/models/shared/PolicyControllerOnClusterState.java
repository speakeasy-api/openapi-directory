package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PolicyControllerOnClusterState {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public String details;
    public PolicyControllerOnClusterState withDetails(String details) {
        this.details = details;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public PolicyControllerOnClusterStateStateEnum state;
    public PolicyControllerOnClusterState withState(PolicyControllerOnClusterStateStateEnum state) {
        this.state = state;
        return this;
    }
}