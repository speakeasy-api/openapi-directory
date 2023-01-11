package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UnitReactionsFeedback {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbs-down")
    public Double thumbsDown;
    public UnitReactionsFeedback withThumbsDown(Double thumbsDown) {
        this.thumbsDown = thumbsDown;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbs-up")
    public Double thumbsUp;
    public UnitReactionsFeedback withThumbsUp(Double thumbsUp) {
        this.thumbsUp = thumbsUp;
        return this;
    }
}