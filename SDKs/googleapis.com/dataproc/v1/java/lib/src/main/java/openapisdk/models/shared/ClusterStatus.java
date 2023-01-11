package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClusterStatus
 * The status of a cluster and its instances.
**/
public class ClusterStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detail")
    public String detail;
    public ClusterStatus withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public ClusterStatusStateEnum state;
    public ClusterStatus withState(ClusterStatusStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stateStartTime")
    public String stateStartTime;
    public ClusterStatus withStateStartTime(String stateStartTime) {
        this.stateStartTime = stateStartTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("substate")
    public ClusterStatusSubstateEnum substate;
    public ClusterStatus withSubstate(ClusterStatusSubstateEnum substate) {
        this.substate = substate;
        return this;
    }
}