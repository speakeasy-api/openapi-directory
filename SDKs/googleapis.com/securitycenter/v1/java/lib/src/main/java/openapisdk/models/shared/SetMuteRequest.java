package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SetMuteRequest
 * Request message for updating a finding's mute status.
**/
public class SetMuteRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mute")
    public SetMuteRequestMuteEnum mute;
    public SetMuteRequest withMute(SetMuteRequestMuteEnum mute) {
        this.mute = mute;
        return this;
    }
}