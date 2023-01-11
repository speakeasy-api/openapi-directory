package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StateHistory
 * The history of each state this submission has been in.
**/
public class StateHistory {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actorUserId")
    public String actorUserId;
    public StateHistory withActorUserId(String actorUserId) {
        this.actorUserId = actorUserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public StateHistoryStateEnum state;
    public StateHistory withState(StateHistoryStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stateTimestamp")
    public String stateTimestamp;
    public StateHistory withStateTimestamp(String stateTimestamp) {
        this.stateTimestamp = stateTimestamp;
        return this;
    }
}