package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SetFindingStateRequest
 * Request message for updating a finding's state.
**/
public class SetFindingStateRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public String startTime;
    public SetFindingStateRequest withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public SetFindingStateRequestStateEnum state;
    public SetFindingStateRequest withState(SetFindingStateRequestStateEnum state) {
        this.state = state;
        return this;
    }
}