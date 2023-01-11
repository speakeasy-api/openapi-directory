package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EpisodeVoteInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vote")
    public Long vote;
    public EpisodeVoteInput withVote(Long vote) {
        this.vote = vote;
        return this;
    }
}