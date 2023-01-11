package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StateHistory
 * Historical state information.
**/
public class StateHistory {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public StateHistoryStateEnum state;
    public StateHistory withState(StateHistoryStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stateMessage")
    public String stateMessage;
    public StateHistory withStateMessage(String stateMessage) {
        this.stateMessage = stateMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stateStartTime")
    public String stateStartTime;
    public StateHistory withStateStartTime(String stateStartTime) {
        this.stateStartTime = stateStartTime;
        return this;
    }
}