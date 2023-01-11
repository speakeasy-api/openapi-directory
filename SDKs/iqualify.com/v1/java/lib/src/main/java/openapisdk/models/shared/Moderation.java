package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Moderation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isMuted")
    public Boolean isMuted;
    public Moderation withIsMuted(Boolean isMuted) {
        this.isMuted = isMuted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("moderator")
    public Moderator moderator;
    public Moderation withModerator(Moderator moderator) {
        this.moderator = moderator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public Moderation withReason(String reason) {
        this.reason = reason;
        return this;
    }
}