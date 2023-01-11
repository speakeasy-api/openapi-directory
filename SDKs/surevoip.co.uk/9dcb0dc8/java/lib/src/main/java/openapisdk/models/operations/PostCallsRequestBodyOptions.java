package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostCallsRequestBodyOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("a_leg_caller_id")
    public String aLegCallerId;
    public PostCallsRequestBodyOptions withALegCallerId(String aLegCallerId) {
        this.aLegCallerId = aLegCallerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("a_leg_only")
    public Long aLegOnly;
    public PostCallsRequestBodyOptions withALegOnly(Long aLegOnly) {
        this.aLegOnly = aLegOnly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancel_key")
    public Long cancelKey;
    public PostCallsRequestBodyOptions withCancelKey(Long cancelKey) {
        this.cancelKey = cancelKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connect_key")
    public Long connectKey;
    public PostCallsRequestBodyOptions withConnectKey(Long connectKey) {
        this.connectKey = connectKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("play_audio")
    public PostCallsRequestBodyOptionsPlayAudio[] playAudio;
    public PostCallsRequestBodyOptions withPlayAudio(PostCallsRequestBodyOptionsPlayAudio[] playAudio) {
        this.playAudio = playAudio;
        return this;
    }
}