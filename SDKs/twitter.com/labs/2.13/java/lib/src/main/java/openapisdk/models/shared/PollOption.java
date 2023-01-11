package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PollOption
 * Describes a choice in a Poll object.
**/
public class PollOption {
    @JsonProperty("label")
    public String label;
    public PollOption withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonProperty("position")
    public Long position;
    public PollOption withPosition(Long position) {
        this.position = position;
        return this;
    }
    @JsonProperty("votes")
    public Long votes;
    public PollOption withVotes(Long votes) {
        this.votes = votes;
        return this;
    }
}